import { Request, Response, NextFunction } from "express";
import prisma from "../db";
import multer from "multer";


export const applyToJobPost = async (req: Request, res: Response, next: NextFunction) => {
        const { name, email, phone, resume, coverLetter } = req.body;

}



