const express = require("express");
const serverless = require("serverless-http");
const router = require("./routes/index");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
mongoose
  .connect(
    `mongodb+srv://root:123@cluster0.pnvccqv.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Database Connected!"));

app.use(cors());
app.use("/api", router);
module.exports.handler = serverless(app);
