"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoggedIn = void 0;
var jwt = __importStar(require("jsonwebtoken"));
var newSecret = 'secret';
function isLoggedIn(req, res, next) {
    if (req.cookies.jwt == 'loggedout' || req.cookies.jwt == '' || req.cookies.jwt == null) {
        return next();
    }
    if (!req.cookies.jwt) {
        console.log('You are not logged in and you have no token');
        return res.send('you are not logged in and you have no token');
    }
    try {
        var decoded = jwt.verify(req.cookies.jwt, newSecret);
        //console.log(decoded.user);
        req.user = decoded.user;
        //  console.log(req.user.id);
        // console.log('User is logged in with id: ' + req.user.id);
        next();
    }
    catch (err) {
        //res.status(401).json({ msg: 'Token is not valid' });
        console.log('Token is invalid');
        res.redirect('/login');
        return next();
    }
    // next();
}
exports.isLoggedIn = isLoggedIn;
;
