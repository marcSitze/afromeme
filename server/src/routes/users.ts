import * as express from 'express';
const router = express.Router();
import { isLoggedIn } from '../middlewares/auth/isLoggedIn';
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