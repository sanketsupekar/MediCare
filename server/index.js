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

// const upload = multer({ dest: "uploads/" });

// app.post("/uploadImage", upload.single("image"), async (req, res) => {
//   console.log(req.body);
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path);
//     profileUpdate(req.body.p_id, result.secure_url)
//       .then((data) => {
//         res.send(result.secure_url);
//         console.log(result.secure_url);
//       })
//       .catch((e) => {
//         console.error(error);
//         res.status(500).send(error.message);
//       });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// });

app.use("/test", (req, response) => {
  // Upload
  const res = cloudinary.uploader.upload("./image/hospital.jpg", {
    public_id: "olympic_flag",
  });
  res
    .then((data) => {
      console.log(data);
      console.log(data.secure_url);
    })
    .catch((err) => {
      console.log(err);
    });
  // Generate
  const url = cloudinary.url("olympic_flag", {
    width: 100,
    height: 150,
    Crop: "fill",
  });
  console.log(url);
  res.send("Testing...");
});
