import express from "express";
import * as path from "path";
import * as cookieParser from "cookie-parser";
import morgan from 'morgan';
import config from "./config";

const app: express.Application = express();

// import routes
import indexRoute from "./routes/index";

// To parse form data
app.use(express.json());
app.use(morgan('combined'));

// static folders
// app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.static(path.join(__dirname, "/ups")));

//get timestamp
// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString();
//     console.log(req.headers);
// });

// Entry point routes
app.use("/api", indexRoute);

export default app;