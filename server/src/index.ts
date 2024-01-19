import express from "express";
import prisma from "./db";
import cors from "cors";
import { createNewUser, signin, refreshToken, forgotPassword, resetPasswordHandler, checkForEmailAvailability } from "./handlers/user";
import router from "./routes/router";
import { protect } from "./modules/auth";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { getAllJobPosts } from "./handlers/jobPost";
import { errorHandler } from "./modules/middleware/errorHandler";
import config from 'config'
import validateEnv from "./utils/validateEnv";

// import nodemailer from 'nodemailer';

// (async function () {
//   const credentials = await nodemailer.createTestAccount();
//   console.log(credentials);
// })();

validateEnv()

const app = express();

async function bootstrap() {

  // Template engine
  app.set("engine", "pug");
  app.set("views" , `${__dirname}/views`)

  // Middleware
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(cookieParser());
  app.use(
    cors({
      origin: [
        "http://localhost:5174",
        "http://127.0.0.1:5174",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
      ],
      credentials: true,
    })
  );
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", protect, router);
  
  app.get("/all-jobposts", getAllJobPosts);
  app.get("/email-verification", checkForEmailAvailability);
  
  
  // unprotrected routes accessible to all
  app.post("/user", createNewUser);
  app.post("/signin", signin);
  app.post("/refresh", refreshToken);
  app.post("/forgot-password", forgotPassword)
  app.post("/reset-password/:resetToken", resetPasswordHandler)

  app.get("/", (req, res) => {
    res.json({ message: "Hello the server is working" });
  });

  app.use(errorHandler);

  const port = config.get<number>("port")
  app.listen(8000, () => {
    console.log(`Server is running on ${port}`);
  });
}


bootstrap()
.catch((err) => {
    throw err
})
.finally(async () => {
    await prisma.$disconnect()
})