import * as express from 'express';
import { auth } from '../middlewares/auth/auth';
import { uploadVideo, getSuccessPage, getUploadPage, newUpload } from '../controllers/upload';



const router = express.Router();

// jwt middleware
// router.use(auth);

// Render the upload file page
router.get('/', getUploadPage);

// create post
// router.post('/', cr)

 // show when file upload is successful
router.get('/success', getSuccessPage);

 // post a video
router.post('/', newUpload);


export default router;