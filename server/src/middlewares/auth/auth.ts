import { Request, Response, NextFunction} from 'express';
import { Document } from 'mongoose';
import * as jwt from 'jsonwebtoken';
const newSecret = 'secret';

interface UserDocument extends Document{
  name: string
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
    // Get token from the header
    // const token = req.header('x-auth-token');
    let token;
    // if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    //     token = req.headers.authorization.split(' ')[1];
    // }else 
    
    if(req.cookies.jwt){
        token = req.cookies.jwt;
    }

    // Check if no token
    if(!token) {
      //  return res.status(401).json({ msg: 'No token, Not authorized' });
      return res.redirect('/login');
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, newSecret);
        //console.log(decoded.user);
        // req.user = decoded.user;
      //  console.log(req.user.id);
        next();
    } catch(err) {
       // res.status(401).json({ msg: 'Token is not valid' });
        res.redirect('/login');
         return next();
    } 
 
};