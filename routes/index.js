const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer'); 
const Video = require('../models/video'); 

const auth = require('../auth/auth');
  
// Display all the videos and images
router.get('/',async (req, res) => {
    // res.send('these are all the best memes you will ever see');
    const videos = await Video.find({});
    res.render('index', {  
        videos: videos,
        title: 'AfroMeme'
    });
});  
   
// Render the upload page 
// router.get('/upload', (req, res) => {       
//     res.render('videos/video');
// });

module.exports = router;
