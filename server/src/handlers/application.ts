import { Request, Response, NextFunction } from "express";
import prisma from "../db";



export const applyToJobPost = async (req: Request, res: Response, next: NextFunction) => {
        console.log("req files",req.file);
        const { name, email, phone, resume, coverLetter, application } = req.body;

        console.log("reached", name, email, phone, resume, coverLetter, application);
}



