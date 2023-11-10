import { Router } from "express";
import { createNewJobPost, deletejobpost, getPostedJobpostsCount, getAllJobPostsCreatedBy, getJobPostDetail } from '../handlers/jobPost';
import { signin, logout, getUserData } from '../handlers/user';

const router = Router();

/**
 * jobPost related routes
 */
router.post('/jobPost', createNewJobPost)
router.delete('/jobPost/:id', deletejobpost)
router.get('/jobPost/:id', getJobPostDetail)
router.get('/jobPost/posted-count', getPostedJobpostsCount)
router.get('/jobPost', getAllJobPostsCreatedBy)

/**
 * user related routes
 */

router.post('/user/signin', signin)
router.get('/user/logout', logout)
router.get('/user', getUserData)



export default router

