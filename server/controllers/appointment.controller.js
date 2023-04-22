const Appointment = require("../model/appointment.module");

async function appointmentReg(req)
{
    const data = req.body;
    const createAppointment = await Appointment.insertMany([data]);
    return createAppointment;
}

async function searchDoctorAppointment(req)
{
    const data = req.query.search;
    const dataArray = data.split(" ");
    const d_id = dataArray[0];
    const appoStatus = dataArray[1];

    const appointments = await Appointment.find({d_id : d_id, appoStatus: appoStatus});
    return appointments;
}
async function searchPatientAppointment(req)
{
    const data = req.query.search;
  //  console.log(data);
    const dataArray = data.split(" ");
    const p_id = dataArray[0];
    const appoStatus = dataArray[1];

    const appointments = await Appointment.find({p_id : p_id, appoStatus: appoStatus});
    return appointments;
}

async function updateAppointmentStatus(req)
{
    const data = req.body;
    //console.log("Data in function");
    //console.log(data);

    const updateStatus = Appointment.updateOne({a_id : data.a_id},{$set: data}).catch(e => console.log("errrr",e));
    return updateStatus;
}

module.exports = {appointmentReg,searchDoctorAppointment,searchPatientAppointment,updateAppointmentStatus};