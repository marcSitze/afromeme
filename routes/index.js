const express = require('express');
const router = express.Router();
const Video = require('../models/video'); 
const Users = require('../models/Users');
const Comment = require('../models/Comment');

const isLoggedIn = require('../auth/isLoggedIn');

router.use(isLoggedIn);
 
// Display all the videos and images
router.get('/', async (req, res) => {

//    console.log(req.user);
    const userAuth = req.user? true: null;

    // res.send('these are all the best memes you will ever see');
    try {

        const videos = await Video.find({}).sort({ publishDate: -1 });
        res.render('index', {  
            videos,
            title: 'AfroMeme',
            userAuth
        });
    } catch (err) {
        console.error(err);
    }
      
}); 


// Get an individual post with comments post
router.get('/individual/:id', async (req, res) => {
    //console.log(req.user);
    const userAuth = req.user? true: null;
    try {
        const video = await Video.findById(req.params.id); 
        res.render('videos/individual', {
            video,
            title: 'Meme description',
            userAuth,
            
        });
    } catch(err) {
        console.error(err);
    }
});

router.post('/individual/:id', async (req, res) => {
    //console.log(req.user);
    const userAuth = req.user? true: null;
   
    const comment = new Comment({
        comment: req.body.comment,
        video: req.params.id,
        user: req.user.id
    });
});
module.exports = router;
  