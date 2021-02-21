import * as express from 'express';
import { getProfile, logout } from '../controllers/me';
import { auth } from '../middlewares/auth/auth';
const router = express.Router();

 
// Use the jsonewebtoken middleware
// router.use(auth);
 
/*==========================================
            VIEW USER PROFILE
============================================*/
router.get('/', auth, getProfile);

/*==========================================
            LOGOUT USER
============================================*/
  
// logout a user
router.get('/logout', logout);


 
module.exports = router;