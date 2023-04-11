const Hospital = require("../model/hospital.module");
const { connectToDb } = require("../controllers/mongoose.controller");

async function hospitalRegister(req) {
  const data = req.body;
  const createHospital = await Hospital.insertMany([data]);
  return createHospital;
}

async function hospitalLogin(req) {
  const h_id = req.body.h_id;
  const password = req.body.password;
  const hospitalLogin = Hospital.findOne({ h_id: h_id });
  return hospitalLogin;
}
async function searchHospital(req) {
  const searchQuery = req.query.search && req.query.search.toLowerCase();
  console.log(searchQuery);
  const hospitalData = await Hospital.find({
    $or: [
      { h_id: { $regex: searchQuery, $options: "i" } },
      { name: { $regex: searchQuery, $options: "i" } },
      { speciality : { $regex: searchQuery, $options: "i" } },
      { address : { $regex: searchQuery, $options: "i" } },
    ],
  });
  return hospitalData;
}


async function getHospitalName(h_id) {
  const hospitalData = Hospital.findOne({ h_id: h_id });
  return hospitalData;
}

module.exports = {
  hospitalRegister,
  hospitalLogin,
  searchHospital,
  getHospitalName,
};
