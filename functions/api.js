const express = require("express");
const serverless = require("serverless-http");
const router = require("./routes/index");
const cors = require("cors");
const app = express();
app.use(cors());
app.use("/api", router);
module.exports.handler = serverless(app);
