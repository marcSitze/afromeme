const express = require('express');
const router = express.Router();


const isLoggedIn = require('../middlewares/auth/isLoggedIn');
const { getRegisterForm, createUser, getLoginForm, login } = require('../controllers/auth');

 router.use(isLoggedIn);

/*===========================
         REGISTER
============================*/ 
router.get('/register', getRegisterForm);   
 
router.post('/register', createUser);

/*===========================
         LOGIN
============================*/ 
router.get('/login', getLoginForm);
 
router.post('/login', login);

module.exports = router;