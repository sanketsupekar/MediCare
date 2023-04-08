const express = require("express");
const router = express.Router();
const PatientProfile = require("../model/patient.model");
const {
  connectToDb,
  disconnectToDb,
} = require("../controllers/mongoose.controller");
const {
  patientRegister,
  patientLogin,
  searchPatient,
} = require("../controllers/patient.controller");
const {
  hospitalRegister,
  hospitalLogin,
  searchHospital,
  getHospitalName,
} = require("../controllers/hospital.controller");

const {
  doctorRegister,
  doctorLogin,
  searchDoctor,
} = require("../controllers/doctor.controller");
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

router.get("/patient", (req, res, next) => {
  searchPatient(req)
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((e) => {
      res.status(500).json({ message: "Internet Server Error" });
    });
});

router.get("/hospital", (req, res, next) => {
  searchHospital(req)
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((e) => {
      res.status(500).json({ message: "Internet Server Error" });
    });
});

router.get("/doctor", (req, res, next) => {
  searchDoctor(req)
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((e) => {
      res.status(500).json({ message: "Internet Server Error" });
    });
});

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

router.get("/getHospitalName", (req, res) => {
  getHospitalName(req)
    .then((result) => {
      res.status(200).json(result.name);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ message: "Internet Server Error" });
    });
});

router.post("/addDoctor", (req, res) => {
  console.log(req.body);
  doctorRegister(req)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ message: "Internet Server Error" });
    });
});

router.post("/doctorLogin", (req, res) => {
  const d_id = req.body.d_id;
  const password = req.body.password;
  doctorLogin(req)
    .then((result) => {
      console.log(result);
      if (result === null) {
        res.status(404).json({ message: "Invalid Doctor" });
      } else if (result.d_id === d_id && result.password === password) {
        res.status(200).json({ message: "Login Success" });
      } else {
        res.status(404).json({ message: "Invalid Password" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("*", (req, res) => {
  res.send("API");
});

module.exports = router;
