const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

const isLoggedIn = require('../auth/isLoggedIn');

// check if user is logged in (middleware)
router.use(isLoggedIn);

router.get('/', async (req, res) => {

    let searchOptions = {};
    if(req.query.search != null && req.query.search !== '') {
        searchOptions.name = new RegExp(req.query.search, 'i');
    }  
    try { 
       const userAuth = req.user? true: null;
       // const users = await Users.find({});
       const users = await Users.find(searchOptions);
       // res.status(200).json(users);
       res.status(200).render('users/index', {
        title: 'Users',
        users,
        userAuth,
        searchOptions: req.query
       });
    } catch(err) {
        console.error(err);
     //  return res.status(500).json({ msg: 'Server Error' });
    }
}); 

module.exports = router;