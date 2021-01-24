require("babel-polyfill");
//IMPORTANT: DO NOT (TOUCH || REMOVE || EDIT)
//if (!here) ReferenceError regeneratorRuntime is not defined

import path from "path";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../../webpack.dev.config.js";

//  (API) 🌐
const bodyParser = require("body-parser"),
  cors = require("cors"),
  helmet = require("helmet"),
  morgan = require("morgan"),
  { startDatabase } = require("./api/databases/common");

// SETS APP
const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html"),
  compiler = webpack(config),
  PORT = process.env.PORT || 8080;

// APP CONFIG ⚙️
app.use(helmet()); //enhance API's security
app.use(bodyParser.json()); // adds a `.body` property to api requests
app.use(cors()); // cross origin requests
app.use(morgan("combined")); // log HTTP requests
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);
app.use(webpackHotMiddleware(compiler));

// SEND index.html 📁
app.get("/", (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set("content-type", "text/html");
    res.send(result);
    res.end();
  });
});

// (API) ROUTES 🌐
app.use("/api/products", require("./api/routes/product"));
app.use("/api/structure", require("./api/routes/data_structure"))

// TODO: MOVE  startDatabes to LOGGED IN ROUTE  ✅
// connect to our database
// https://www.mongodb.com/
startDatabase().then(async () => {
  app.listen(PORT, async () => {
    console.log(
      `connected to db successfully, go to http://localhost:${PORT}/`
    );
  });
});
