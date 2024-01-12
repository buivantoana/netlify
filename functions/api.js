const express = require("express");
const serverless = require("serverless-http");
import router from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://root:123@cluster0.pnvccqv.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Database Connected!"));

app.use("/api", router);

module.exports.handler = serverless(app);
