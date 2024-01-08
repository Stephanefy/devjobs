import { Request, Response, NextFunction } from "express";
import prisma from "../db";
import { storage } from "../storage/googleStorage";
import { format } from "util";


export const applyToJobPost = async (req: Request, res: Response, next: NextFunction) => {
        
        console.log("req body",req.body)
        console.log("req files", req.files)

        if (req.files) {
                try {
                        let promises = [];
                        let vals = Object.values(req.files)
        
                        const bucket = storage.bucket('devjobs-application-files');
        
                        for(let f of vals){
                                const gcsname = f[0].originalname
                                const file = bucket.file(gcsname)
                            
                                const stream = file.createWriteStream({
                                  metadata: {
                                    contentType: f[0].mimetype
                                  },
                                  resumable: false
                                })
                            
                                stream.on('error', (err: any) => {
                                  f[0].cloudStorageError = err
                                  next(err)
                                })
                            
                                stream.end(f[0].buffer)

                                console.log("gcsname",gcsname)
                            
                                promises.push(
                                  new Promise<void> ((resolve, reject) => {
                                    stream.on('finish', (data:any) => {
                                        f[0].cloudStorageObject = gcsname;
                                        console.log("data when writing media on gcs is finishd",data)
                                        file.makePublic()
                                        resolve()
                                    })
                                  })
                                )
                              }
                              Promise.all(promises)

        
                } catch (error) {
                        res.status(500).send({
                                message: `Uploaded the file successfully: but public access is denied!`,
                                // url: publicURL,
                              });
                }
               
                // const files = req.files as  {[fieldname: string]: Express.Multer.File[]};
                // const resumeFile = files["resume"][0]
                // const coverLetterFile = files["coverLetter"][0]
                // const bucket = storage.bucket('devjobs-application-files');
                
                // const filesTuple = [resumeFile, coverLetterFile]

                // const blobs: any[] = filesTuple.map(file => bucket.file(file.originalname))
                
                // console.log("blobs",blobs.length)

                // for (const blob of blobs) {

                //         console.log("blob",blob)

                //         const blobStream = blob.createWriteStream({
                //                 // metadata: {
                //                 // contentType: blob[0].mimetype
                //                 // },
                //                 resumable: false
                //         })

                //         console.log("stream",blobStream)

                //         blobStream.on("error", (err: any) => {
                //                 res.status(500).send({ message: err.message });
                //         });

                //         promises.push(
                //                 new Promise((resolve, reject) => {
                //                         blobStream.on('finish', (data:any) => {
                //                                 const publicURL = format(
                //                                         `https://storage.googleapis.com/${bucket.name}/${blob.name}`
                //                                 );
                //                         })

                //                         // try {
                //                         //         bucket.file()
                //                         // }
                //                 })
                //         )
                            
                // }
        
                // console.log("resume file",resumeFile, coverLetterFile)
        

        }
     


        const { name, email, phone } = req.body;



    

        // await transferManager.uploadManyFiles([firstFilePath, secondFilePath]);


        // console.log("reached", name, email, phone, resume, coverLetter, application);
}



