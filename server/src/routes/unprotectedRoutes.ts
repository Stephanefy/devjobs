import { Router } from "express";
import { createNewUser, signin, refreshToken, forgotPassword, resetPasswordHandler, checkForEmailAvailability, getAllSkills } from "../handlers/user";
import { getAllJobPosts } from "../handlers/jobPost";


const router = Router();


  // unprotrected routes accessible to all
  router.post("/user", createNewUser);
  router.post("/signin", signin);
  router.post("/refresh", refreshToken);
  router.post("/forgot-password", forgotPassword)
  router.post("/reset-password/:resetToken", resetPasswordHandler)
  router.get("/all-jobposts", getAllJobPosts);
  router.get("/email-verification", checkForEmailAvailability);
  router.get("/skills-list", getAllSkills )




export default router