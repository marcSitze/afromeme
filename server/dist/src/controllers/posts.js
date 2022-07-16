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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.likePost = exports.updatePost = exports.getPosts = exports.getPost = exports.createPost = void 0;
var post_service_1 = __importDefault(require("../services/post.service"));
var account_service_1 = __importDefault(require("../services/account.service"));
var response_handler_1 = require("../common/response.handler");
var constants_1 = __importDefault(require("../common/constants"));
var httpStatus = constants_1.default.httpStatus;
var postsService = new post_service_1.default();
var accountsService = new account_service_1.default();
var createPost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, author, description, media, errors, post, account, newPost, accountUp, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, author = _a.author, description = _a.description, media = _a.media;
                errors = [];
                if (!author) {
                    errors.push({ msg: "please fill in the author id" });
                }
                // if(!description) {
                // 	errors.push({msg: "please fill in a description"});
                // }
                if (!media) {
                    errors.push({ msg: "please attach a media link" });
                }
                if (errors.length > 0) {
                    errors.push({ msg: "please enter the required information" });
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.BAD_REQUEST, errors)];
                }
                post = {
                    author: author,
                    description: req.body.description ? req.body.description : '',
                    media: media,
                    comments: [],
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                return [4 /*yield*/, accountsService.getAccountById(author)];
            case 2:
                account = _b.sent();
                if (!account) {
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.NOT_FOUND, { "msg": "User Account not found..." })];
                }
                return [4 /*yield*/, postsService.createPost(post)];
            case 3:
                newPost = _b.sent();
                return [4 /*yield*/, accountsService.updateAccount({ _id: author }, { posts: __spreadArray(__spreadArray([], account.posts, true), [newPost._id], false) })];
            case 4:
                accountUp = _b.sent();
                console.log('AccountUP: ', accountUp);
                (0, response_handler_1.SuccessHandler)(res, httpStatus.CREATED, post);
                return [3 /*break*/, 6];
            case 5:
                err_1 = _b.sent();
                console.error(err_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.createPost = createPost;
var getPost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, post, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, postsService.getPostById(id)];
            case 2:
                post = _a.sent();
                if (!post) {
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.NOT_FOUND, { "msg": "Post not found..." })];
                }
                (0, response_handler_1.SuccessHandler)(res, httpStatus.OK, post);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.error(err_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getPost = getPost;
var getPosts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var posts, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, postsService.getPosts()];
            case 1:
                posts = _a.sent();
                if (!posts) {
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.NO_CONTENT, 'No posts yet...')];
                }
                (0, response_handler_1.SuccessHandler)(res, httpStatus.OK, posts);
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                console.error(err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getPosts = getPosts;
var updatePost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); };
exports.updatePost = updatePost;
var likePost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, post, userId, account_1, newLikes, like_1, updated, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.params);
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, postsService.getPostById(id)];
            case 2:
                post = _a.sent();
                if (!post) {
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.NOT_FOUND, { "msg": "Post not found..." })];
                }
                userId = req.user.id;
                return [4 /*yield*/, accountsService.findOne({ user: userId })
                    // update likes
                    // first check if this user exists
                ];
            case 3:
                account_1 = _a.sent();
                // update likes
                // first check if this user exists
                if (!account_1) {
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.BAD_REQUEST, { msg: "Account not found" })];
                }
                if (!account_1) return [3 /*break*/, 5];
                newLikes = [];
                like_1 = post.likes.find(function (item) { return String(item) === String(account_1 === null || account_1 === void 0 ? void 0 : account_1._id); });
                console.log('like: ', like_1);
                if (like_1) {
                    // 	// this means that we want to unlike the post
                    newLikes = post.likes.filter(function (item) { return item !== like_1; });
                }
                if (!like_1) {
                    newLikes = __spreadArray(__spreadArray([], post.likes, true), [account_1._id], false);
                }
                console.log('newLikes: ', newLikes);
                return [4 /*yield*/, postsService.updatePost(post._id, { likes: __spreadArray([], newLikes, true) })
                    // return res.json({msg: 'Post liked updated'})
                ];
            case 4:
                updated = _a.sent();
                // return res.json({msg: 'Post liked updated'})
                return [2 /*return*/, (0, response_handler_1.SuccessHandler)(res, httpStatus.OK, { msg: "Like updated", post: updated })];
            case 5:
                res.send('REqest');
                return [3 /*break*/, 7];
            case 6:
                err_4 = _a.sent();
                console.error('Like Err: ', err_4);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.likePost = likePost;
