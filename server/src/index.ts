import express, { Express, RequestHandler} from "express";
import * as path from "path";
import morgan from "morgan";

import config from "./config";

const app: express.Application = express();

// import routes
import indexRoute from "./routes/index";
import indexRoutesV2 from "./routes/v2";

// To parse form data
app.use(express.urlencoded({ extended: true }) as RequestHandler);
app.use(express.json() as RequestHandler);
app.use(morgan("combined") as RequestHandler);

// Set view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

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

app.use("/api/v2", indexRoutesV2);

export default app;
