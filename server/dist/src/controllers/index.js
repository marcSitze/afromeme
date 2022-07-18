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
exports.postComment = exports.getIndividual = exports.getIndex = void 0;
var response_handler_1 = require("../common/response.handler");
var constants_1 = __importDefault(require("../common/constants"));
var httpStatus = constants_1.default.httpStatus;
// get Index route
var getIndex = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // Check if user is loggedIn returns a boolean
        // const userAuth = req.user? true: null;
        // res.send('these are all the best memes you will ever see');
        try {
            // const videos = await Video.find({}).sort({ publishDate: -1 });
            // res.render('index', {
            //     videos,
            //     title: 'AfroMeme',
            //     userAuth: true
            // });
            (0, response_handler_1.SuccessHandler)(res, httpStatus.OK, { "msg": "Welcome to afromeme" });
        }
        catch (err) {
            console.error(err);
        }
        return [2 /*return*/];
    });
}); };
exports.getIndex = getIndex;
var getIndividual = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        //console.log(req.user);
        // const userAuth = req.user? true: null;
        try {
            // const video = await Video.findById(req.params.id);
            // const comments = await Comment.find({video: video.id}).populate('user', ['name']);
            // console.log(comments);
            // res.render('videos/individual', {
            //     video,
            //     title: 'Meme description',
            //     userAuth: true,
            //     comments
            // });
            // res.status(200).json({ "msg": "individual post", video, comments });
        }
        catch (err) {
            console.error(err);
        }
        return [2 /*return*/];
    });
}); };
exports.getIndividual = getIndividual;
var postComment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        //console.log(req.user);
        // const userAuth = req.user? true: null;
        try {
            // const video = await Video.findById(req.params.id);
            // const comments = await Comment.find({});
            // if(req.body.comment){
            //     const comment = new Comment({
            //         comment: req.body.comment,
            //         video: req.params.id,
            //         // user: req.user.id
            //     });
            //     //   console.log(comment);
            //     const newComment = await comment.save();
            //     res.status(201).json({ "msg": "comment posted", video, comments, newComment });
            // }
            // refresh the browser and shows new comments
            // res.redirect('/individual/' + video.id);
        }
        catch (err) {
            console.error(err);
        }
        return [2 /*return*/];
    });
}); };
exports.postComment = postComment;
