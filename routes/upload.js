const express = require('express');
const path = require('path');
const multer = require('multer');
const User = require('../models/Users');
const Video = require('../models/video');
const auth = require('../auth/auth');

const router = express.Router();

// multer config
const storage = multer.diskStorage({

    destination: function(req, file, callback) {

      callback(null, './ups');
  },
    filename: function (req, file, callback) {
        const ext = file.mimetype.split('/')[1];
        // callback(null, `user-${req.user.id}-${Date.now()}.${ext}`);
         callback(null, `user-${Date.now()}.${ext}`);
 }
   
});

const multerFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image')){
        cb(null, true);
    }else {
        cb('Not an image! please upload an image or gif', false);
    }
};


// Render the upload file page
router.get('/', auth, (req, res) => {
    res.render('videos/video', {
        title: 'Upload'
    });
});
 
 // show when file upload is successful
router.get('/success', (req, res) => {
    res.render('videos/success', {
        title: 'Success'
    });
 });

 // post a video
router.post('/', (req, res) => {
    let video;
    const upload = multer({ 
        storage: storage,
        fileFilter: multerFilter 
    }).single('video');
    upload(req, res, async function(err) {
       if(err) {
	       console.log('Error uploading file.');
           return res.end("Error uploading file."); 
        }
        //res.end("File is uploaded");
        res.redirect('/upload/success');
       // console.log(req.file);
     //   console.log("File uploaded successfully"); 
        
        video = new Video({
            name: req.file.originalname,
            path: req.file.filename
        });
        try {
            await video.save();
        } catch(err) {
            console.error(err);
        }
  });
});


module.exports = router;