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
exports.getCommentsByQuery = exports.updateComment = exports.getComments = exports.getComment = exports.createComment = void 0;
var response_handler_1 = require("../common/response.handler");
var comments_service_1 = __importDefault(require("../services/comments.service"));
var post_service_1 = __importDefault(require("../services/post.service"));
var constants_1 = __importDefault(require("../common/constants"));
var httpStatus = constants_1.default.httpStatus;
var commentsService = new comments_service_1.default();
var postsService = new post_service_1.default();
var createComment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, author, message, post, errors, postToUpdate, comment, newpost, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, author = _a.author, message = _a.message, post = _a.post;
                errors = [];
                if (!author) {
                    errors.push({ "msg": "Please enter a user id" });
                }
                if (!message) {
                    errors.push({ "msg": "Please enter a comment message" });
                }
                if (!post) {
                    errors.push({ "msg": "Please enter the post id" });
                }
                if (errors.length > 0) {
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.BAD_REQUEST, errors)];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                return [4 /*yield*/, postsService.getPostById(post)];
            case 2:
                postToUpdate = _b.sent();
                // console.log('postTuUpdate: ', postToUpdate);
                if (!postToUpdate) {
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.NOT_FOUND, "Post not found...")];
                }
                return [4 /*yield*/, commentsService.createComment({
                        author: author,
                        message: message,
                        post: post
                    })];
            case 3:
                comment = _b.sent();
                return [4 /*yield*/, postsService.updatePost(post, { comments: __spreadArray(__spreadArray([], postToUpdate.comments, true), [comment._id], false) })];
            case 4:
                newpost = _b.sent();
                // console.log('newpost: ', newpost);
                (0, response_handler_1.SuccessHandler)(res, httpStatus.CREATED, comment);
                return [3 /*break*/, 6];
            case 5:
                err_1 = _b.sent();
                console.error(err_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.createComment = createComment;
var getComment = function (req, res) { };
exports.getComment = getComment;
var getComments = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var comments, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, commentsService.getComments()];
            case 1:
                comments = _a.sent();
                if (comments.length === 0) {
                    return [2 /*return*/, (0, response_handler_1.SuccessHandler)(res, httpStatus.NO_CONTENT, { "msg": "not comments found..." })];
                }
                (0, response_handler_1.SuccessHandler)(res, httpStatus.OK, comments);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.error(err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getComments = getComments;
var updateComment = function (req, res) { };
exports.updateComment = updateComment;
var getCommentsByQuery = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, comments, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                query = {
                    // ...req.query
                    post: req.query.post
                };
                console.log('query: ', query);
                if (Object.keys(query).length === 0) {
                    return [2 /*return*/, (0, response_handler_1.ErrorHandler)(res, httpStatus.BAD_REQUEST, { msg: "queries info missing" })];
                }
                return [4 /*yield*/, commentsService.getCommentsByQuery(query)];
            case 1:
                comments = _a.sent();
                return [2 /*return*/, (0, response_handler_1.SuccessHandler)(res, httpStatus.OK, comments)];
            case 2:
                err_3 = _a.sent();
                console.log('getCommentsByQueryErr: ', err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getCommentsByQuery = getCommentsByQuery;
