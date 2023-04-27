const Doctor = require("../model/doctor.module");
const {
  connectToDb,
  disconnectToDb,
} = require("../controllers/mongoose.controller");
const { getHospitalName } = require("./hospital.controller");
const {isHospitalId} = require("./funtions.controller");

async function doctorRegister(req) {
  const data = req.body;
  await getHospitalName(data.h_id).then((result) => {
    data.hospitalName = result.name;
  });
  const createDoctor = await Doctor.insertMany([data]);
  return createDoctor;
}
async function updateDoctor(req) {
  const data = req.body;
  const doctorUpdate = Doctor.updateOne(
    { d_id: data.d_id },
    { $set: data }
  ).catch((e) => console.log("errrr", e));
  return doctorUpdate;
}
async function doctorLogin(req) {
  const d_id = req.body.d_id;
  const password = req.body.password;
  const DoctorLogin = Doctor.findOne({ d_id: d_id });
  return DoctorLogin;
}
async function searchDoctor(req) {
  const searchQuery = req.query.search && req.query.search.toLowerCase();
  // console.log(searchQuery);
  // if(isHospitalId(searchQuery))
  // {
  //   const doctorData = await Doctor.find({h_id : searchQuery})
  //   return doctorData;
  // }

  const doctorData = await Doctor.find({
    $or: [
      { d_id: { $regex: searchQuery, $options: "i" } },
      { h_id: { $regex: searchQuery, $options: "i" } },
      { name: { $regex: searchQuery, $options: "i" } },
      { speciality: { $regex: searchQuery, $options: "i" } },
      { qualification: { $regex: searchQuery, $options: "i" } },
      { hospitalName: { $regex: searchQuery, $options: "i" } },
    ],
  });
  return doctorData;
}

async function doctorProfileUpdate(id,url)
{
   
    const profileUpdate = await Doctor.updateOne({d_id : id},{$set: {profileUrl : url}}).catch(e => console.log("errrr",e));
    return profileUpdate;
}

async function deleteDoctor(request) {
  const data = request.body;
  const deleteData = await Doctor.deleteOne(data);
  return deleteData;
}


module.exports = { doctorRegister, doctorLogin, searchDoctor, updateDoctor,doctorProfileUpdate,deleteDoctor };
