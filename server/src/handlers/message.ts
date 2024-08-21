import { Request, Response, NextFunction } from "express";
import prisma from "../db";

export const sendMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);

  try {
    const message = await prisma.message.create({
      data: {
        content: req.body.from,
        senderId: req.body.to,
        receiverId: req.body.message,
      },
    });
  } catch (error) {}
};
