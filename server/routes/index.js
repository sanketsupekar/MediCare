const express = require("express");
const router = express.Router();
const PatientProfile = require("../model/patient.model");
const { connectToDb } = require("../controllers/mongoose.controller");
const {
  patientRegister,
  patientLogin,
} = require("../controllers/patient.controller");
const { hospitalRegister, hospitalLogin } = require("../controllers/hospital.controller");

const patientUser = {
  p_id: "P101",
  firstName: "Sanket",
  lastName: "Supekar",
  age: "20",
  phoneNo: "9130420859",
  address: "At Shirdi",
  password: "saisanket",
};

const hospitalUser = {
  _id: null,
  h_id: "H101",
  name: "SaiRam",
  speciality: "Cancer",
  mail: "sairam123@gmail.com",
  phoneNo: "9999224456",
  address: "At. Pune",
  password: "123",
};

router.post("/patientLogin", (req, res) => {
  const p_id = req.body.p_id;
  const password = req.body.password;
  patientLogin(req)
    .then((result) => {
      console.log(result);
      if (result === null) {
        res.status(404).json({ message: "Invalid Patient" });
      } else if (result.p_id === p_id && result.password === password) {
        res.status(200).json({ message: "Login Success" });
      } else {
        res.status(404).json({ message: "Invalid Password" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/patientReg", (req, res) => {

  patientRegister(req)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ message: "Internet Server Error" });
    });
});

router.post("/hospitalLogin", (req, res) => {
  const h_id = req.body.h_id;
  const password = req.body.password;
  hospitalLogin(req)
    .then((result) => {
      console.log(result);
      if (result === null) {
        res.status(404).json({ message: "Invalid Hospital" });
      } else if (result.h_id === h_id && result.password === password) {
        res.status(200).json({ message: "Login Success" });
      } else {
        res.status(404).json({ message: "Invalid Password" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
router.post("/hospitalReg", (req, res) => {
  console.log(req.body);
  hospitalRegister(req)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ message: "Internet Server Error" });
    });
});

router.get("*", (req, res) => {
  res.send("API");
});

module.exports = router;
