const next_id_gen = require("../model/nextId.module");
function incrementId(id) {
    const letter = id.charAt(0);
    const digits = id.slice(1);
    const incrementedDigits = (parseInt(digits) + 1).toString().padStart(3, '0');
    const newId = letter + incrementedDigits
    return newId;
  }
  async function updateHospitalId(newId){
    await next_id_gen.updateOne({id : "next"},{hospital_id : newId}).then((result)=>{
        //Nothing...
    })
  }
  async function updatePatientId(newId){
    await next_id_gen.updateOne({id : "next"},{patient_id : newId}).then((result)=>{
        //Nothing...
    })
  }
  async function updateDoctorId(newId){
    await next_id_gen.updateOne({id : "next"},{doctor_id : newId}).then((result)=>{
        //Nothing...
    })
  }

  async function updateAppointmentId(newId){
    await next_id_gen.updateOne({id : "next"},{appointment_id : newId}).then((result)=>{
        //Nothing...
    })
  }

  async function getNextId() {
    return await next_id_gen.find();
  }

  module.exports = {incrementId,updateHospitalId,updateDoctorId,updatePatientId,updateAppointmentId,getNextId};