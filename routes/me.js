const express = require('express');
const { getProfile, logout } = require('../controllers/me');
const auth = require('../middlewares/auth/auth');
const router = express.Router();

 
// Use the jsonewebtoken middleware
router.use(auth);
 
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