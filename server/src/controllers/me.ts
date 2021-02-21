import { Request, Response } from 'express';
// import jwt from 'jsonwebtoken';
const User = require('../models/Users');
const Video = require('../models/video');
const Profile = require('../models/Profile');
// const jwtSecret = config.get('jwtSecret');

export const getProfile = async (req: any, res: Response) => {

    try {
        
        const user = await User.findById( req.user.id ); 
        const videos = await Video.find({});

        // res.render('me/index', {
        //     title: 'me',
        //     user,
        //     videos,
        //     userAuth: user
        // }); 
        res.status(200).json({ user, videos });
        
    } catch (err) { 
        console.log(err);  
    }
}

export const logout = (req: Request, res: Response) => {

    res.cookie('jwt', 'loggedout', { expires: new Date( Date.now() + 10 * 1 ),
        httpOnly: true
    }); 

    console.log('You are logged Out');
    res.redirect('/');
    
}