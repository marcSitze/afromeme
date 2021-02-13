const express = require('express');
const auth = require('../middlewares/auth/auth');
const { uploadVideo, getSuccessPage, getUploadPage } = require('../controllers/upload');

const router = express.Router();

// jwt middleware
router.use(auth);

// Render the upload file page
router.get('/', getUploadPage);
 
 // show when file upload is successful
router.get('/success', getSuccessPage);
 
 // post a video
router.post('/', uploadVideo);


module.exports = router;