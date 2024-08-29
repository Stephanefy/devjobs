import { Request, Response, NextFunction } from "express";
import { User } from "../types/custom";
import prisma from "../db";

export const createNewJobPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
 

  const {
    company,
    logo,
    logoBackground,
    position,
    contract,
    location,
    website,
    apply,
    description,
    requirements,
    role,
  } = req.body.jobPost;

  try {
    const jobPost = await prisma.jobPost.create({
      data: {
        company: company,
        logo: logo,
        logoBackground: logoBackground,
        position: position,
        contract: contract,
        location: location,
        website: website,
        apply: apply,
        description: description,
        requirements: requirements,
        role: role,
        postedById: req!.user!.id,
      },
    });

    res.status(201).json({ data: jobPost });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

export const deletejobpost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("user id", req.user?.id);
  console.log("jobpost id", req.params.id);

  try {
    const deletedJobpost = await prisma.jobPost.delete({
      where: {
        id_postedById: {
          id: +req.params.id,
          postedById: req.user?.id as string,
        },
      },
    });
    console.log("deletedJobpost", deletedJobpost);

    res.status(200).json({ data: deletedJobpost });
  } catch (e) {
    next(e);
    res.status(400).json({ error: e });
  }
};

export const getPostedJobpostsCount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  console.log("reached")
  try {
    const postedCount = await prisma.jobPost.count({
      where: {
        postedById: req.user?.id,
      },
    });

    console.log(postedCount);

    res.status(200).json({ count: postedCount });
  } catch (error) {
    next(error);
  }
};

export const getAllJobPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const jobPosts = await prisma.jobPost.findMany({
      orderBy: {
        postedAt: "desc"
      },
      include: {
        postedBy: true
      }
    });
    res.status(200).json({ data: jobPosts });
  } catch (error) {
    next(error);
    res.status(400).json({ error });
  }
};

export const getAllJobPostsCreatedBy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postedJobsBy = await prisma.jobPost.findMany({
      where: {
        postedById: req.user?.id,
      },
    });

    console.log(postedJobsBy);

    res.status(200).json({ data: postedJobsBy });
  } catch (error) {
    next(error);
  }
};


export const getJobPostDetail = async (req: Request, res: Response, next: NextFunction) => {

  try {
    const jobPost = await prisma.jobPost.findUnique({
      where: {
        id: +req.params.id,
      },
    });

    res.status(200).json({ ...jobPost });
  } catch (error) {
    next(error);
  }
}


