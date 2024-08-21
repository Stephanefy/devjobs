import { Router } from "express";
import {
  createNewJobPost,
  deletejobpost,
  getPostedJobpostsCount,
  getAllJobPostsCreatedBy,
  getJobPostDetail,
} from "../handlers/jobPost";
import { signin, logout, getUserData } from "../handlers/user";
import {
  applyToJobPost,
  getAllApplicationsWithJobInfo,
  getApplicationDetails,
} from "../handlers/application";
import { singleTonMulter } from "../middleware/upload";
import { sendMessage } from "../handlers/message";

const router = Router();

/**
 * jobPost related routes
 * Careful always place 'specific routes' in the latest order
 */
router.post("/jobPost", createNewJobPost);
router.get("/jobPost/posted-count", getPostedJobpostsCount);
router.get("/jobPost", getAllJobPostsCreatedBy);
router.get("/job/:id", getJobPostDetail);
router.delete("/jobPost/:id", deletejobpost);


/**
 * message related routes
 */
router.post("/message", sendMessage);

/**
 * job application related routes
 */
router.post(
  "/application",
  singleTonMulter.fields([
    {
      name: "resume",
      maxCount: 1,
    },
    {
      name: "coverLetter",
      maxCount: 1,
    },
  ]),
  applyToJobPost
);
router.get("/applicant/applications/:userId", getAllApplicationsWithJobInfo);
router.get("/applications/:applicationId", getApplicationDetails);
/**
 * user related routes
 */

router.post("/user/signin", signin);
router.get("/user/logout", logout);
router.get("/user", getUserData);

export default router;
