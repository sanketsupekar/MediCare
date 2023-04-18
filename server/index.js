//console.log("Project Runnig");
const express = require("express");
const apiRouter = require("./routes");
const port = process.env.PORT || 3001;
const { connectToDb } = require("./controllers/mongoose.controller");
const mongoose = require("mongoose");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { profileUpdate } = require("./controllers/patient.controller");

const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
connectToDb();
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log("Server is ready to listening....", port);
});

// Configuration Cloudinary
cloudinary.config({
  cloud_name: "didso0xgl",
  api_key: "536755261867198",
  api_secret: "JVvF5sfMcy2VYO1BE8eIFXVaEVo",
});

app.use("/test", (req, response) => {
  res.send("Testing...");
});
