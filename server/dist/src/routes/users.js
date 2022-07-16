"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var users_1 = require("../controllers/users");
/*======================
        Get all users
======================== */
router.post("/", users_1.createUser);
router.get("/", users_1.getUsers);
router.get("/:id", users_1.getUserById);
router.get("/q?", users_1.getUser);
router.put("/:id", users_1.updateUser);
router.post("/login", users_1.login);
router.post("/auth/requestResetPassword", users_1.requestResetPassword);
router.get("/auth/resetPassword", function (req, res) {
    console.log("req.query: ", req.query);
    res.render("users/user", {
        user: { token: req.query.token, userId: req.query.id },
    });
});
router.post("/auth/resetPassword", users_1.resetPassword);
// router.get('/account', auth, (req, res) => res.send('hello account'));
/*===============================
        Get an individual user
================================= */
router.get("/:id", users_1.getUserById);
exports.default = router;
