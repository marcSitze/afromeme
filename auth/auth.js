const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Get token from the header
    // const token = req.header('x-auth-token');
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }else if(req.cookies.jwt){
        token = req.cookies.jwt;
    }

    // Check if no token
    if(!token) {
      //  return res.status(401).json({ msg: 'No token, Not authorized' });
      return res.redirect('/login');
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, 'secret');
        req.user = decoded.user;
        next();
    } catch(err) {
       // res.status(401).json({ msg: 'Token is not valid' });
         res.redirect('/login');
    }
 
};