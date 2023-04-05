const Hospital = require("../model/hospital.module");
const {connectToDb} = require("../controllers/mongoose.controller");

async function hospitalRegister(req)
{

    const data = req.body;
    const createHospital = await Hospital.insertMany([data]);
    return createHospital;
}

async function hospitalLogin(req)
{
    const h_id = req.body.h_id;
    const password = req.body.password;
    const hospitalLogin = Hospital.findOne({ h_id: h_id });
    return hospitalLogin;

}
async function searchHospital(req)
{
    const h_id = req.query.search;
    console.log(h_id);
  const hospitalData = await Hospital.findOne({h_id : h_id});
  return hospitalData;
}

module.exports = {hospitalRegister,hospitalLogin,searchHospital};