import express, { Router } from 'express';
const router: Router = express.Router();

// routes
import accountsRoute from "./account";
import usersRoute from "./users";
import postsRoutes from './posts';
import commentsRoutes from './comments'
// import donateRoute from "./donate";

import { isLoggedIn } from '../middlewares/auth/isLoggedIn';
import { getIndex, getIndividual, postComment } from '../controllers';

// Check if user is loggedIn
// router.use(isLoggedIn);

/*===================================
    Index page route get all memes
=====================================*/
// Display all the videos and images
router.get('/', getIndex);
// user routes
router.use("/users", usersRoute);
// account routes
router.use("/accounts", accountsRoute);
// posts routes
router.use('/posts', postsRoutes);
// comments routes
router.use('/comments', commentsRoutes);


// router.use("/", reglogRoute);
// app.use("/upload", uploadRoute);
// router.use("/donate", donateRoute);
export default router;
