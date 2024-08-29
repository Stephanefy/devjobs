import { Request, Response, NextFunction } from "express";
import prisma from "../db";
import { includes } from "lodash";

export const sendMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  try {
    const message = await prisma.message.create({
      data: {
        content: req.body.content,
        senderId: req.body.sender,
        receiverId: req.body.receiver,
      },
    });
    
    res.status(201).json({ data: message });
    ;
  } catch (error) {
    res.status(500).send({
      message: error,
    });
  }
};

export const getSentMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  console.log("receiverId", req.params.id)
  try {
    const data = await prisma.message.findMany({
      where: {
        senderId: req.params.id
      },
      include: {
        sender: {
          select: {
            email: true
          }
        },
        receiver: {
          select: {
            email: true
          }
        }
      }
    })
    res.status(200).json({ data });

  } catch(error) {
    res.status(400).json({ error });
  }
}

// export const getMessageBySender = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   console.log("senderid fdsfdsfdsfdsfds", req.params.id)

//   try {

//   } catch(error) {
//       const data = await prisma.message.findMany({
//         where: {
//           senderId: req.params.id
//         }
//       })
//       res.status(200).json({ data });
//   }
// }
