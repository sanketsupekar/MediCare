const express = require("express");
const router = express.Router();
const PatientProfile = require("../model/patient.model");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const {
  connectToDb,
  disconnectToDb,
} = require("../controllers/mongoose.controller");
const {
  patientRegister,
  patientLogin,
  searchPatient,
  updatePatient,
  patientProfileUpdate,
} = require("../controllers/patient.controller");
const {
  hospitalRegister,
  hospitalLogin,
  searchHospital,
  getHospitalName,
  updateHospital,
  hospitalProfileUpdate,
} = require("../controllers/hospital.controller");

const {
  doctorRegister,
  doctorLogin,
  searchDoctor,
  updateDoctor,
  doctorProfileUpdate,
  deleteDoctor,
} = require("../controllers/doctor.controller");
const {
  incrementId,
  updateHospitalId,
  getNextId,
  updateDoctorId,
  updatePatientId,
  updateAppointmentId,
} = require("../controllers/nextId.controller");

const { appointmentReg,searchDoctorAppointment,searchPatientAppointment,updateAppointmentStatus } = require("../controllers/appointment.controller");
const { json } = require("body-parser");

// Configuration Cloudinary
cloudinary.config({
  cloud_name: "didso0xgl",
  api_key: "536755261867198",
  api_secret: "JVvF5sfMcy2VYO1BE8eIFXVaEVo",
});
const upload = multer({ dest: "uploads/" });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

router.get("/patient", (req, res, next) => {
  searchPatient(req)
    .then((result) => {
      // console.log(result);
      res.status(200).json(result);
    })
    .catch((e) => {
      res.status(500).json({ message: "Internet Server Error" });
    });
});

router.get("/hospital", (req, res, next) => {
  searchHospital(req)
    .then((result) => {
      // console.log(result);
      res.status(200).json(result);
    })
    .catch((e) => {
      res.status(500).json({ message: "Internet Server Error" });
    });
});

router.get("/doctor", (req, res, next) => {
  searchDoctor(req)
    .then((result) => {
      //  console.log(result);
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
      updatePatientId(incrementId(req.body.p_id));
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ message: "Internet Server Error" });
    });
});

router.post("/patientUpdate", (req, res) => {
  updatePatient(req)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ message: "Internet Server Error" });
    });
});

router.post(
  "/patientProfileUpdate",
  upload.single("image"),
  async (req, res) => {
    console.log(req.body);
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      patientProfileUpdate(req.body.p_id, result.secure_url)
        .then((data) => {
          res.send(result.secure_url);
          console.log(result.secure_url);
        })
        .catch((e) => {
          console.error(error);
          res.status(500).send(error.message);
        });
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  }
);

router.post("/getAppointment", (req, res) => {
  
  getNextId().then((result) => {
    req.body.a_id = result[0].appointment_id;
    appointmentReg(req)
    .then((result) => {
      res.status(200).json(result);
      updateAppointmentId(incrementId(req.body.a_id));
    })
    .catch((e) => {
      console.log(e. _message);
      if(e._message === "appointment validation failed")
      {
        res.status(404).json({ message: "Update Profile Details Properly..." });
      }
      else
      {
        res.status(500).json({ message: "Internet Server Error" });
      }
      
    });
  }).catch((e)=>{
    console.log(e);
  });

  // res.status(200);
  // appointmentReg(req)
  //   .then((result) => {
  //     res.status(200).json(result);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //     res.status(500).json({ message: "Internet Server Error" });
  //   });
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
      updateHospitalId(incrementId(req.body.h_id));
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ message: "Internet Server Error" });
    });
});

router.post("/hospitalUpdate", (req, res) => {
  updateHospital(req)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ message: "Internet Server Error" });
    });
});

router.post(
  "/hospitalProfileUpdate",
  upload.single("image"),
  async (req, res) => {
    console.log(req.body);
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      hospitalProfileUpdate(req.body.h_id, result.secure_url)
        .then((data) => {
          res.send(result.secure_url);
          console.log(data);
          // console.log(result.secure_url);
        })
        .catch((e) => {
          console.error(error);
          res.status(500).send(error.message);
        });
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  }
);

router.post("/addDoctor", (req, res) => {
  console.log(req.body);
  doctorRegister(req)
    .then((result) => {
      res.status(200).json(result);
      updateDoctorId(incrementId(req.body.d_id));
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ message: "Internet Server Error" });
    });
});

router.delete("/deleteDoctor", (req, res) => {
  console.log(req.body);
  deleteDoctor(req)
  .then((result) => {
    res.status(200).json(result);
  })
  .catch((e) => {
    res.status(500).json({ message: "Internet Server Error" });
  });
});


router.post("/doctorUpdate", (req, res) => {
  updateDoctor(req)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ message: "Internet Server Error" });
    });
});

router.post(
  "/doctorProfileUpdate",
  upload.single("image"),
  async (req, res) => {
    console.log(req.body);
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      doctorProfileUpdate(req.body.d_id, result.secure_url)
        .then((data) => {
          res.send(result.secure_url);
          console.log(data);
          // console.log(result.secure_url);
        })
        .catch((e) => {
          console.error(error);
          res.status(500).send(error.message);
        });
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  }
);

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

router.get("/hospitalId", (req, res) => {
  getNextId().then((result) => {
    res.status(200).json(result[0]);
  });
});

router.get("/patientId", (req, res) => {
  getNextId().then((result) => {
    res.status(200).json(result[0]);
  });
});

router.get("/doctorId", (req, res) => {
  getNextId().then((result) => {
    res.status(200).json(result[0]);
  });
});


router.get("/doctorAppointment", (req, res, next) => {
 // console.log(req.query);
 searchDoctorAppointment(req)
    .then((result) => {
   //    console.log(result);
      res.status(200).json(result);
    })
    .catch((e) => {
      res.status(500).json({ message: "Internet Server Error" });
    });
});

router.get("/patientAppointment", (req, res) => {
  console.log(req.query);
  searchPatientAppointment(req)
     .then((result) => {
       console.log(result);
       res.status(200).json(result);
     })
     .catch((e) => {
       res.status(500).json({ message: "Internet Server Error" });
     });
 });

router.post("/updateAppointmentStatus", (req, res) => {
  // console.log(req.body);
   updateAppointmentStatus(req)
    .then((result) => {
       console.log(result);
       res.status(200).json(result);
    })
    .catch((e) => {
      res.status(500).json({ message: "Internet Server Error" });
    });
 });

router.get("*", (req, res) => {
  res.send("API");
});

module.exports = router;
