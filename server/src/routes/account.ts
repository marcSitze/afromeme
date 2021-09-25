import * as express from 'express';
import { getAccount, logout } from '../controllers/account';
import { auth } from '../middlewares/auth/auth';
const router = express.Router();


// Use the jsonewebtoken middleware
// router.use(auth);

/*==========================================
            VIEW USER PROFILE
============================================*/
router.get('/', auth, getAccount);

/*==========================================
            LOGOUT USER
============================================*/

// logout a user
router.get('/logout', logout);

export default router;