import { Request, Response } from 'express';
const Users = require('../models/Users');
const Videos = require('../models/video');
// import { } from '../interfaces/models/'

export const getUsers = async (req: any, res: Response) => {
    // let searchOptions = {name: ''};
    if(req.query.search != null && req.query.search !== '') {
        // searchOptions.name = new RegExp(req.query.search, 'i');
    }  
    try { 
       const userAuth = req.user? true: null;
       // const users = await Users.find({});
    //    const users = await Users.find(searchOptions);
       const users = await Users.find({});
       // res.status(200).json(users);
    //    res.status(200).render('users/index', {
    //     title: 'Users',
    //     users,
    //     userAuth,
    //     searchOptions: req.query
    //    });
    res.status(200).json({ users });
    } catch(err) {
        console.error(err);
     //  return res.status(500).json({ msg: 'Server Error' });
    }
}

export const getUserById = async (req: any, res: Response) => {
     //   res.send('user page ' + req.params.id);
 
     try {
        const userAuth = req.user? true: null;
        const user = await Users.findById(req.params.id);
        let videos = await Videos.find({}).sort({ publishDate: -1 });

       // res.status(200).json(videos);
        
        // res.status(200).render('users/user', {
        //     title: 'User - ' + user.name,
        //     videos,
        //     user,
        //     userAuth,
        // });
        res.status(200).json({ user, videos });
    } catch(err) {
        console.error(err);
    }

}