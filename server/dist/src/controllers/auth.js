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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.createUser = void 0;
var jwt = __importStar(require("jsonwebtoken"));
var newSecret = "secret";
var User = require("../models/Users");
var bcrypt = __importStar(require("bcrypt"));
// export const getRegisterForm = () => {
//        // to check if user is loggedin
//    const userAuth = null;
//    res.render('register/register', {
//       user: new User(),
//       title: 'Register',
//       userAuth
//    });
// }
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, _a, name, email, password, user, userAuth, salt, _b, newUser, payload, token, err_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                errors = [];
                _a = req.body, name = _a.name, email = _a.email, password = _a.password;
                console.log(req.body);
                _c.label = 1;
            case 1:
                _c.trys.push([1, 7, , 8]);
                userAuth = null;
                return [4 /*yield*/, User.findOne({ email: email })];
            case 2:
                // 1 check if user exists
                user = _c.sent();
                if (user) {
                    errors.push({ msg: "User already exists" });
                    // return res.status(400).render('register/register', {
                    //    user: new User(),
                    //    errors,
                    //    title: 'Register',
                    //    userAuth
                    // });
                    return [2 /*return*/, res.status(400).json({ "errors": errors })];
                }
                if (!name) {
                    errors.push({ msg: "Please enter the Username" });
                }
                if (!email) {
                    errors.push({ msg: "Please enter the email" });
                }
                if (!password) {
                    errors.push({ msg: "Please enter your password" });
                }
                user = new User({
                    name: name,
                    email: email,
                    password: password,
                });
                if (!name || !email || !password) {
                    //   return res.render('register/register', {
                    //      user,
                    //      errors,
                    //      title: 'Register',
                    //      userAuth
                    //    });
                    return [2 /*return*/, res.status(400).json({ 'errors': errors })];
                }
                return [4 /*yield*/, bcrypt.genSalt(10)];
            case 3:
                salt = _c.sent();
                _b = user;
                return [4 /*yield*/, bcrypt.hash(password, salt)];
            case 4:
                _b.password = _c.sent();
                return [4 /*yield*/, user.save()];
            case 5:
                newUser = _c.sent();
                payload = {
                    user: {
                        id: user.id,
                    },
                };
                return [4 /*yield*/, jwt.sign(payload, newSecret, {
                        expiresIn: 3600000,
                    })];
            case 6:
                token = _c.sent();
                console.log("User created");
                res.status(201).json({ user: newUser, token: token });
                return [3 /*break*/, 8];
            case 7:
                err_1 = _c.sent();
                res.status(500).send("server error");
                console.error(err_1);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userAuth, _a, email, password, errors, user, isMatch, payload, token, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                userAuth = null;
                _a = req.body, email = _a.email, password = _a.password;
                errors = [];
                if (!email) {
                    errors.push({ msg: "Please enter your email" });
                }
                if (!password) {
                    errors.push({ msg: "Please enter your password" });
                }
                if (!email || !password) {
                    //  return res.render('register/login', {
                    //  errors,
                    //  title: 'Login',
                    //  userAuth
                    //  });
                    return [2 /*return*/, res.status(400).json({ msg: errors })];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                return [4 /*yield*/, User.findOne({ email: email })];
            case 2:
                user = _b.sent();
                if (!user) {
                    errors.push({ msg: "Invalid credidentials" });
                    //   return res.status(400).render('register/login', {
                    //       errors,
                    //       title: 'Login',
                    //       userAuth
                    //   });
                    return [2 /*return*/, res.status(400).json({ msg: errors })];
                }
                return [4 /*yield*/, bcrypt.compare(password, user.password)];
            case 3:
                isMatch = _b.sent();
                if (!isMatch) {
                    errors.push({ msg: "Invalid credidentials" });
                    //       return res.status(400).render('register/login', {
                    //       errors,
                    //       title: 'Login',
                    //       userAuth
                    //   });
                    return [2 /*return*/, res.status(400).json({ msg: errors })];
                }
                payload = {
                    user: {
                        id: user.id,
                    },
                };
                return [4 /*yield*/, jwt.sign(payload, newSecret, {
                        expiresIn: 3600000,
                    })];
            case 4:
                token = _b.sent();
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
                    httpOnly: true,
                });
                console.log("User logged in");
                res.status(200).json({ user: user, token: token });
                return [3 /*break*/, 6];
            case 5:
                err_2 = _b.sent();
                console.error(err_2);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
