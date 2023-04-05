const Patient = require("../model/patient.model");
const {connectToDb,disconnectToDb} = require("../controllers/mongoose.controller");

async function patientRegister(req)
{

    const data = req.body;
    const createPatient = await Patient.insertMany([data]);
    return createPatient;
}

async function patientLogin(req)
{

    const p_id = req.body.p_id;
    const password = req.body.password;
    const patientLogin = Patient.findOne({ p_id: p_id });
    return patientLogin;

}

async function searchPatient(req)
{
    const p_id = req.query.search;
    console.log(p_id);
  const patientData = await Patient.findOne({p_id : p_id});
  return patientData;
}
module.exports = {patientRegister,patientLogin, searchPatient};