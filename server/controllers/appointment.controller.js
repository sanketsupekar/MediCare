const Appointment = require("../model/appointment.module");

async function appointmentReg(req)
{
    const data = req.body;
    const createAppointment = await Appointment.insertMany([data]);
    return createAppointment;
}

module.exports = {appointmentReg};