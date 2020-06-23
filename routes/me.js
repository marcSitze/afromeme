const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../auth/auth');
const User = require('../models/Users');
const Video = require('../models/video');
const config = require('config');
const jwtSecret = config.get('jwtSecret');

// Use the jsonewebtoken middleware
router.use(auth);

router.get('/', auth, async (req, res) => {
    //console.log(req.user);
    // res.send('Welcome to my dashboard ' + req.user.id);

    try {
       
        const user = await User.findById( req.user.id );
        const videos = await Video.find({});

        res.render('me/index', {
            title: 'me',
            user,
            videos
        }); 
     
    } catch (err) {
        console.log(err);
    }
});

// logout a user
router.get('/logout', auth, (req, res) => {

    res.cookie('jwt', 'loggedout', { expires: new Date( Date.now() + 10 * 1 ),
        httpOnly: true
    }); 

    console.log('You are signed Out');
    res.redirect('/');
   
});
 
module.exports = router;