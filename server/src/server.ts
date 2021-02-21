import * as express from "express";
import * as mongoose from "mongoose";
import * as path from "path";
import * as cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}
const port = process.env.PORT || 5000;
const app = express();

// import routes
const indexRoute = require("./routes/index");
const reglogRoute = require("./routes/reglog");
const uploadRoute = require("./routes/upload");
const meRoute = require("./routes/me");
const usersRoute = require("./routes/users");
const donateRoute = require("./routes/donate");
// To parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(json());
app.use(morgan('dev'));

// Connect to mongo database
mongoose
  .connect("mongodb://localhost:27017/videos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB connected..."))
  .catch((err) => console.error(err));

// to display our web pages
// app.set("view engine", "ejs");
// app.set("views", __dirname + "/views");

// middlewares
app.use(cookieParser());

// static folders
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/ups")));

// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString();
//     console.log(req.headers);
// });

// Display all the videos and images
app.use("/", indexRoute);
app.use("/", reglogRoute);
app.use("/upload", uploadRoute);
app.use("/me", meRoute);
app.use("/users", usersRoute);
app.use("/donate", donateRoute);

// create server
app.listen(port, () => console.log("Server is listening on port " + port));
