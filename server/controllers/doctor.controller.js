const Doctor = require("../model/doctor.module");
const {connectToDb,disconnectToDb} = require("../controllers/mongoose.controller");

async function doctorRegister(req)
{
    const data = req.body;
    const createDoctor = await Doctor.insertMany([data]);
    return createDoctor;
}

async function doctorLogin(req)
{

    const d_id = req.body.d_id;
    const password = req.body.password;
    const DoctorLogin = Doctor.findOne({ d_id: d_id });
    return DoctorLogin;

}
async function searchDoctor(req)
{
    const searchQuery = req.query.search && req.query.search.toLowerCase();
    console.log(searchQuery);
    const doctorData = await Doctor.find({
      $or: [
        { d_id: { $regex: searchQuery, $options: "i" } },
        { name: { $regex: searchQuery, $options: "i" } },
        { speciality : { $regex: searchQuery, $options: "i" } },
        { qualification : { $regex: searchQuery, $options: "i" } },
        { hospitalName : { $regex: searchQuery, $options: "i" } },
      ],
    });
    return doctorData;
}

module.exports = {doctorRegister,doctorLogin,searchDoctor};