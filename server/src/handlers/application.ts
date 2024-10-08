import { Request, Response, NextFunction } from "express";
import prisma from "../db";
import { storage } from "../storage/googleStorage";
import { format } from "util";
import { generateV4ReadSignedUrl } from "../utils/generateSignedUrl";
import { has } from "lodash";

/**
 * Applies to a job post.
 *
 * @param {Request} req - the request object
 * @param {Response} res - the response object
 * @param {NextFunction} next - the next middleware function
 * @return {Promise<void>} - a promise that resolves to void
 */
export const applyToJobPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("req body", req.body);
  console.log("req files", req.files);
  //TODO once creating profile at the same time as user is done
  const { email, phone, appliedById, appliedToId, message } = req.body;

  const applicantProfile = await prisma.profile.findFirst({
      where: {
          userId: appliedById
      }
  })
  console.log("applicantProfile",applicantProfile)
  console.log("req files",req.files?.length === undefined);

  if (req.files) {
    console.log("reached here")
    try {
      let promises = [];
      let vals = Object.values(req.files);

      const bucket = storage.bucket("devjobs-application-files");

      for (let f of vals) {
        const gcsname = f[0].originalname;
        const file = bucket.file(gcsname);

        const stream = file.createWriteStream({
          metadata: {
            contentType: f[0].mimetype,
          },
          resumable: false,
        });

        stream.on("error", (err: any) => {
          f[0].cloudStorageError = err;
          next(err);
        });

        stream.end(f[0].buffer);

        console.log("gcsname", gcsname);

        promises.push(
          new Promise<string>((resolve, reject) => {
            stream.on("finish", (data: any) => {
              // Create URL for directly file access via HTTP.
              const publicUrl = format(
                `https://storage.googleapis.com/${bucket.name}/${gcsname}`
              );

              console.log("publicUrl", publicUrl);
              f[0].cloudStorageObject = gcsname;
              console.log("data when writing media on gcs is finishd", file);
              resolve(gcsname);
            });
          })
        );
      }
      Promise.all(promises).then(async (gcsnames) => {

        const [resumeUrl, coverLetterUrl] = gcsnames;

        const newApplication = await prisma.application.create({
          data: {
            applicantEmail: email,
            appliedById: appliedById,
            appliedToId: parseInt(appliedToId),
            message,
            coverLetter: coverLetterUrl,
            resume: resumeUrl,
          },
        });
        res.status(201).json({ data: newApplication });
      });

      
    } catch (error) {
      res.status(500).send({
        message: `Uploaded the file successfully: but public access is denied!`,
      });
    }
  } else {

      const newApplication = await prisma.application.create({
        data: {
          applicantEmail: email,
          resume: "",
          coverLetter: "",
          appliedById: appliedById,
          appliedToId: parseInt(appliedToId),
          message,
        },
      });
      res.status(201).json({ data: newApplication });    
  }
};

/**
 * Retrieves all applications with job information.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @return {Promise<void>} The JSON response with the applications data.
 */
export const getAllApplicationsWithJobInfo = async (req: Request, res: Response, next: NextFunction) => {

  const applications = await prisma.application
    .findMany({
      include: {
        appliedTo: {
          select: {
            apply: true,
            contract: true
          },

        },
        
      },
      where: {
        appliedById: req.params.id,
      },
    })
    console.log(applications)


    res.json({data: applications}).status(200);

}

/**
 * Retrieves the details of an application.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @return {Promise<void>} Resolves with the application details.
 */
export const getApplicationDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {


  try {
    const fileUrls = [];
    const application = await prisma.application.findUnique({
      include: {
        appliedTo: {
          select: {
            apply: true,
            contract: true,
            description: true,
            position: true
          },
        },
      },
      where: {
        id: req.params.applicationId,
      },


      
    });
    if (application) {
      application.resume && fileUrls.push(await generateV4ReadSignedUrl(application.resume));
      application.coverLetter && fileUrls.push(await generateV4ReadSignedUrl(application.coverLetter));
    }

    console.log("fileUrls", fileUrls)

    res.status(200).json({ data: application, files : fileUrls });
  } catch (error) {
    next(error);
    res.status(400).json({ error });
  }
};


export const getApplicantHasApplied = async(
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const hasApplied = await prisma.application.findFirst({
    where: {
      appliedById: req.params.applicantId,
      applicantEmail: req.params.jobPostId,
    }
  })

  if(hasApplied) {
    res.status(200).json({hasApplied: true});
  }
  
  res.status(200).json({hasApplied: false});

}