import * as express from 'express';
const router = express.Router();

import { isLoggedIn } from '../middlewares/auth/isLoggedIn';
import { getIndex, getIndividual, postComment } from '../controllers';

// Check if user is loggedIn
router.use(isLoggedIn);
  
/*===================================
    Index page route get all memes
=====================================*/ 
// Display all the videos and images
router.get('/', getIndex); 
/*===================================
    Get an individual meme with comments post
=====================================*/  
router.get('/individual/:id', getIndividual); 
/*===================================
         post a comment
=====================================*/  
router.post('/individual/:id', postComment);
module.exports = router;
  