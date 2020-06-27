const jwt = require('jsonwebtoken');
const config = require('config');
const jwtSecret = config.get('jwtSecret');
module.exports = (req, res, next) => {


    if(req.cookies.jwt == 'loggedout'){
        return next();
    }

    if(req.cookies.jwt){
     // Verify token
    try {
        const decoded = jwt.verify(req.cookies.jwt, jwtSecret);
        //console.log(decoded.user);
        req.user = decoded.user;
      //  console.log(req.user.id);
     // console.log('User is logged in with id: ' + req.user.id);
       return next();
    } catch(err) {
       // res.status(401).json({ msg: 'Token is not valid' });
    //   res.redirect('/login');
         res.send('you are not logged in');
        return next();
        }
}

    next();
 
};