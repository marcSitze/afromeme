"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.requestResetPassword = exports.login = exports.getUser = exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
var crypto_1 = __importDefault(require("crypto"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var response_handler_1 = require("../common/response.handler");
var user_service_1 = __importDefault(require("../services/user.service"));
var account_service_1 = __importDefault(require("../services/account.service"));
var email_service_1 = require("../services/email.service");
var Token_1 = __importDefault(require("../models/Token"));
var constants_1 = __importDefault(require("../common/constants"));
var auth_1 = require("../common/auth");
var config_1 = __importDefault(require("../config"));
var httpStatus = constants_1.default.httpStatus;
var userService = new user_service_1.default();
var accountService = new account_service_1.default();
var emailService = new email_service_1.EmailService();
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, _a, username, email, phone, password, user, newAccount, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                errors = [];
                _a = req.body, username = _a.username, email = _a.email, phone = _a.phone, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                return [4 /*yield*/, userService.findOne({ email: email })];
            case 2:
                // 1 check if user exists
                user = _b.sent();
                if (user) {
                    errors.push({ msg: "User already exists" });
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.BAD_REQUEST, errors)];
                }
                if (!username) {
                    errors.push({ msg: "Please enter the Username" });
                }
                if (!email) {
                    errors.push({ msg: "Please enter the email" });
                }
                if (!password) {
                    errors.push({ msg: "Please enter your password" });
                }
                if (errors.length > 0) {
                    errors.push({ msg: "please fill in all the required informations" });
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.BAD_REQUEST, errors)];
                }
                user = {
                    username: username,
                    email: email,
                    phone: phone,
                    password: password,
                };
                return [4 /*yield*/, userService.createUser(user)];
            case 3:
                newAccount = _b.sent();
                return [4 /*yield*/, accountService.createAccount({ user: newAccount._id, posts: [] })];
            case 4:
                _b.sent();
                return [4 /*yield*/, emailService.newmailjet({
                        subject: "Account created",
                        text: "Account has been created successfully...",
                        to: "jorelsitze01@gmail.com",
                    })];
            case 5:
                _b.sent();
                console.log("User created");
                (0, response_handler_1.SuccessHandler)(res, httpStatus.CREATED, {
                    msg: "User created successfully...",
                });
                return [3 /*break*/, 7];
            case 6:
                err_1 = _b.sent();
                console.error(err_1);
                (0, response_handler_1.ErrorHandler)(res, httpStatus.INTERNAL_SERVER_ERROR, "".concat(err_1, " - Server Error"));
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
var getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // let searchOptions = {name: ''};
                if (req.query.search != null && req.query.search !== "") {
                    // searchOptions.name = new RegExp(req.query.search, 'i');
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, userService.getUsers()];
            case 2:
                users = _a.sent();
                (0, response_handler_1.SuccessHandler)(res, httpStatus.OK, users);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.error(err_2);
                (0, response_handler_1.ErrorHandler)(res, httpStatus.INTERNAL_SERVER_ERROR, "".concat(err_2, " - Server Error"));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getUsers = getUsers;
var getUserById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, userService.getUserById(req.params.id)];
            case 1:
                user = _a.sent();
                // let videos = await Videos.find({}).sort({ publishDate: -1 });
                (0, response_handler_1.SuccessHandler)(res, httpStatus.OK, { user: user });
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.error(err_3);
                (0, response_handler_1.ErrorHandler)(res, httpStatus.INTERNAL_SERVER_ERROR, "".concat(err_3, " - Server Error"));
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUserById = getUserById;
var updateUser = function () { };
exports.updateUser = updateUser;
// get User by query
var getUser = function () { };
exports.getUser = getUser;
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, errors, user, isMatch, payload, token, err_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                console.log("req.body: ", req.body);
                errors = [];
                if (!email) {
                    errors.push({ msg: "Please enter your email" });
                }
                if (!password) {
                    errors.push({ msg: "Please enter your password" });
                }
                if (errors.length > 0) {
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.BAD_REQUEST, errors)];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                return [4 /*yield*/, userService.findOne({ email: email })];
            case 2:
                user = _b.sent();
                console.log("user: ", user);
                if (!user) {
                    errors.push({ msg: "Invalid credidentials" });
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.BAD_REQUEST, errors)];
                }
                return [4 /*yield*/, (0, auth_1.verifyPassword)(password, user.password)];
            case 3:
                isMatch = _b.sent();
                console.log("isMatch: ", isMatch);
                if (!isMatch) {
                    errors.push({ msg: "Invalid credidentials" });
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.BAD_REQUEST, errors)];
                }
                payload = {
                    user: {
                        id: user._id,
                    },
                };
                return [4 /*yield*/, (0, auth_1.generateToken)(payload)];
            case 4:
                token = _b.sent();
                console.log("User logged in");
                (0, response_handler_1.SuccessHandler)(res, httpStatus.OK, {
                    msg: "User loggedin successfully...",
                    token_type: "Bearer token",
                    token: token,
                });
                return [3 /*break*/, 6];
            case 5:
                err_4 = _b.sent();
                console.error(err_4);
                (0, response_handler_1.ErrorHandler)(res, httpStatus.INTERNAL_SERVER_ERROR, "".concat(err_4, " - Server Error"));
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var requestResetPassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, token, resetToken, hash, link;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('req.body: ', req.body);
                if (!req.body.email) {
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.BAD_REQUEST, { msg: "Please enter your email" })];
                }
                return [4 /*yield*/, userService.findOne({ email: req.body.email })];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.BAD_REQUEST, { msg: "Email does not exist" })];
                }
                ;
                return [4 /*yield*/, Token_1.default.findOne({ userId: user._id })];
            case 2:
                token = _a.sent();
                if (!token) return [3 /*break*/, 4];
                return [4 /*yield*/, token.deleteOne()];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                resetToken = crypto_1.default.randomBytes(32).toString("hex");
                return [4 /*yield*/, bcrypt_1.default.hash(resetToken, Number(config_1.default.auth.saltRounds))];
            case 5:
                hash = _a.sent();
                return [4 /*yield*/, new Token_1.default({
                        userId: user._id,
                        token: hash,
                        createdAt: Date.now(),
                    }).save()];
            case 6:
                _a.sent();
                link = "".concat(config_1.default.app.host, "/api/users/auth/resetPassword?token=").concat(resetToken, "&id=").concat(user._id);
                // sendEmail(
                //   user.email,
                //   "Password Reset Request",
                //   {
                //     name: user.name,
                //     link: link,
                //   },
                //   "./template/requestResetPassword.handlebars"
                // );
                return [4 /*yield*/, emailService.newmailjet({
                        subject: "Password Reset Request",
                        text: "Click here to reset your account password please... \n" + link,
                        to: user.email,
                    })];
            case 7:
                // sendEmail(
                //   user.email,
                //   "Password Reset Request",
                //   {
                //     name: user.name,
                //     link: link,
                //   },
                //   "./template/requestResetPassword.handlebars"
                // );
                _a.sent();
                // return link;
                // res.send({ link, msg: "check your mail" })
                return [2 /*return*/, (0, response_handler_1.SuccessHandler)(res, httpStatus.OK, { msg: "Check your mail to reset your password" })];
        }
    });
}); };
exports.requestResetPassword = requestResetPassword;
var resetPassword = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userId, token, password, passwordResetToken, isValid, hash, user, err_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, userId = _a.userId, token = _a.token, password = _a.password;
                console.log('req.body: ', req.body);
                if (!userId || !token || !password) {
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.BAD_REQUEST, { msg: "userId, token, password are missing" })];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 10, , 11]);
                return [4 /*yield*/, Token_1.default.findOne({ userId: userId })];
            case 2:
                passwordResetToken = _b.sent();
                if (!passwordResetToken) {
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.BAD_REQUEST, { msg: "Invalid or expired password reset token" })];
                }
                return [4 /*yield*/, bcrypt_1.default.compare(token, passwordResetToken.token)];
            case 3:
                isValid = _b.sent();
                if (!isValid) {
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.BAD_REQUEST, { msg: "Invalid or expired password reset token" })];
                }
                return [4 /*yield*/, bcrypt_1.default.hash(password, Number(config_1.default.auth.saltRounds))];
            case 4:
                hash = _b.sent();
                // await User.updateOne(
                //   { _id: userId },
                //   { $set: { password: hash } },
                //   { new: true }
                // );
                return [4 /*yield*/, userService.updateUser(userId, { password: hash })];
            case 5:
                // await User.updateOne(
                //   { _id: userId },
                //   { $set: { password: hash } },
                //   { new: true }
                // );
                _b.sent();
                return [4 /*yield*/, userService.findOne({ _id: userId })];
            case 6:
                user = _b.sent();
                if (!user) return [3 /*break*/, 9];
                // sendEmail(
                //   user.email,
                //   "Password Reset Successfully",
                //   {
                //     name: user.name,
                //   },
                //   "./template/resetPassword.handlebars"
                // );
                return [4 /*yield*/, emailService.newmailjet({
                        subject: "Password Reset Successfully",
                        text: "Account password has been reset successfully... \n",
                        to: user.email,
                    })];
            case 7:
                // sendEmail(
                //   user.email,
                //   "Password Reset Successfully",
                //   {
                //     name: user.name,
                //   },
                //   "./template/resetPassword.handlebars"
                // );
                _b.sent();
                return [4 /*yield*/, passwordResetToken.deleteOne()];
            case 8:
                _b.sent();
                _b.label = 9;
            case 9: return [2 /*return*/, res.send("Password updated successfully")];
            case 10:
                err_5 = _b.sent();
                console.error("Error While reseting: ", err_5);
                return [3 /*break*/, 11];
            case 11: return [2 /*return*/];
        }
    });
}); };
exports.resetPassword = resetPassword;
