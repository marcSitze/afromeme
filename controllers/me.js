const jwt = require('jsonwebtoken');
const User = require('../models/Users');
const Video = require('../models/video');
const Profile = require('../models/Profile');
const config = require('config');
const jwtSecret = config.get('jwtSecret');

exports.getProfile = async (req, res) => {

    try {
        
        const user = await User.findById( req.user.id ); 
        const videos = await Video.find({});

        res.render('me/index', {
            title: 'me',
            user,
            videos,
            userAuth: user
        }); 
        // res.render('me/index'); 
        
    } catch (err) { 
        console.log(err);  
    }
}

exports.logout = (req, res) => {

    res.cookie('jwt', 'loggedout', { expires: new Date( Date.now() + 10 * 1 ),
        httpOnly: true
    }); 

    console.log('You are logged Out');
    res.redirect('/');
    
}