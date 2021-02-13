const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/auth/isLoggedIn');
const { getUsers, getUserById } = require('../controllers/users');

// check if user is logged in (middleware)
router.use(isLoggedIn);

/*======================
        Get all users
======================== */
router.get('/', getUsers);  
 
/*===============================
        Get an individual user
================================= */
router.get('/:id', getUserById); 
module.exports = router;