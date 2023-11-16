import { Router } from "express";
import { createNewJobPost, deletejobpost, getPostedJobpostsCount, getAllJobPostsCreatedBy, getJobPostDetail } from '../handlers/jobPost';
import { signin, logout, getUserData } from '../handlers/user';

const router = Router();

/**
 * jobPost related routes
 * Careful always place 'specific routes' in the latest order
 */
router.post('/jobPost', createNewJobPost)
router.get('/jobPost/posted-count', getPostedJobpostsCount)
router.get('/jobPost', getAllJobPostsCreatedBy)
router.get('/jobPost/:id', getJobPostDetail)
router.delete('/jobPost/:id', deletejobpost)

/**
 * user related routes
 */

router.post('/user/signin', signin)
router.get('/user/logout', logout)
router.get('/user', getUserData)



export default router

