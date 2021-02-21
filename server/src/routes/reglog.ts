import * as express from 'express';
const router = express.Router();


import { isLoggedIn } from '../middlewares/auth/isLoggedIn';
import {  createUser, getLoginForm, login } from '../controllers/auth';

 router.use(isLoggedIn);

/*===========================
         REGISTER
============================*/
router.post('/register', createUser);

/*===========================
         LOGIN
============================*/ 
router.get('/login', getLoginForm);
 
router.post('/login', login);

module.exports = router;