"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var app = (0, express_1.default)();
// import routes
var index_1 = __importDefault(require("./routes/index"));
// To parse form data
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, morgan_1.default)('combined'));
// Set view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
// static folders
// app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.static(path.join(__dirname, "/ups")));
//get timestamp
// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString();
//     console.log(req.headers);
// });
// Entry point routes
app.use("/api", index_1.default);
exports.default = app;
