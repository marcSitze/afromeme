import express, { Router } from 'express';
const router: Router = express.Router();

// routes
import reglogRoute from "./reglog";
import uploadRoute from "./upload";
import meRoute from "./me";
import usersRoute from "./users";
import donateRoute from "./donate";

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
router.use("/me", meRoute);
/*===================================
    Get an individual meme with comments post
=====================================*/
router.get('/individual/:id', getIndividual);
/*===================================
         post a comment
=====================================*/
router.post('/individual/:id', postComment);

// router.use("/", reglogRoute);
// app.use("/upload", uploadRoute);
router.use("/donate", donateRoute);
export default router;
