import { hashPassword, comparePassword, createJWT } from "../modules/auth";
import { Request, Response, NextFunction } from "express";
import config from 'config';
import prisma from "../db";
import crypto from "crypto";
import Email from "../utils/email";

import { User } from "@prisma/client";

export const createNewUser = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  console.log(email, password, role);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: await hashPassword(password),
        role,
      },
    });

    const token = createJWT(user);

    res.set("Access-Control-Allow-Origin", ["http://localhost:5173"]);
    res.set("Access-Control-Allow-Credentials", "true");

    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    return res.status(200).json({
      message: "User created successfully",
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.log(error);
  }
};

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });

    const userIsValid = await comparePassword(
      req.body.password,
      user!.password
    );

    if (!userIsValid) {
      res.status(401).json({ message: "Invalid credentials provided" });
    }

    const token = createJWT(user as User);
    res.set("Access-Control-Allow-Origin", ["http://localhost:5173"]);
    res.set("Access-Control-Allow-Credentials", "true");

    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    return res.status(200).json({
      id: user!.id,
      message: "User created successfully",
      email: user!.email,
      role: user!.role,
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie("access_token");
  res.json({ message: "you are successfully logged out" });
};

/*
    This is a protected route, only logged in users can access it
*/
export const getUserData = async (req: Request, res: Response) => {
  res.json({ user: { email: req.user!.email, role: req.user!.role } });
};

export const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.cookies.access_token) {
    return;
  }
  const { userId } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    const token = createJWT(user as User);
    res.set("Access-Control-Allow-Origin", ["http://localhost:5173"]);
    res.set("Access-Control-Allow-Credentials", "true");

    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
  } catch (error) {
    return next(error);
  }
  return res.json({ message: "token refreshed" }).status(200);
};

export const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {


  try {

    const user = await prisma.user.findUnique({
      where:{
        email: req.body.email
      }
    })

    const message = 'You will receive a reset email if user with that email exist';

    //TO DO set the logic for verifying user when registering
    // if (!user.verified) {
    //   return res.status(403).json({
    //     status: 'fail',
    //     message: 'Account not verified',
    //   });
    // }

    // if (user.provider) {
    //   return res.status(403).json({
    //     status: 'fail',
    //     message:
    //       'We found your account. It looks like you registered with a social auth account. Try signing in with social auth.',
    //   });
    // }

    if (!user) return res.json({error: "User does not exist"}).status(400)

    const userProfile = await prisma.profile.findFirst({
      where: {userId: user.id}
    })

    console.log(userProfile)

    const resetToken = crypto.randomBytes(32).toString('hex');
    const passwordResetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');

    const passwordResetAt = new Date(Date.now() + 10 * 60 * 1000)

     const updatedUser = await prisma.user.update({
        where: {
          email: user.email
        },
        data: {
          passwordResetToken,
          passwordResetAt,

        },
        select: {
          email: true
        }
     }) 


     try {
      const url = `${config.get<string>('origin')}/resetPassword/${resetToken}`;
      // await new Email(user, url).sendPasswordResetToken();

      res.status(200).json({
        status: 'success',
        message,
      });
    } catch (err: any) {
      await prisma.user.update({
        where: {
          email: user.email
        },
        data: {
          passwordResetToken: null,
          passwordResetAt: null,

        },
        select: {
          email: true
        }
     }) 
      return res.status(500).json({
        status: 'error',
        message: 'There was an error sending email',
      });
    }
  
    
  } catch (error) {
    next(error)
  }
}
