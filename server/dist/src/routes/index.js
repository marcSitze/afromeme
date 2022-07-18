"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
// routes
var account_1 = __importDefault(require("./account"));
var users_1 = __importDefault(require("./users"));
var posts_1 = __importDefault(require("./posts"));
var comments_1 = __importDefault(require("./comments"));
var media_1 = __importDefault(require("./media"));
var controllers_1 = require("../controllers");
// Check if user is loggedIn
// router.use(isLoggedIn);
/*===================================
    Index page route get all memes
=====================================*/
// Display all the videos and images
router.get('/', controllers_1.getIndex);
router.get('/refresh', controllers_1.getIndex);
// user routes
router.use("/users", users_1.default);
// account routes
router.use("/accounts", account_1.default);
// posts routes
router.use('/posts', posts_1.default);
// comments routes
router.use('/comments', comments_1.default);
// media routes
router.use('/media', media_1.default);
// router.use("/", reglogRoute);
// app.use("/upload", uploadRoute);
// router.use("/donate", donateRoute);
exports.default = router;
