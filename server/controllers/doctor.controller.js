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
module.exports = {doctorRegister,doctorLogin};