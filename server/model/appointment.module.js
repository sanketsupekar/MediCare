var mongoose = require("mongoose");
var AppointmentSchema = new mongoose.Schema({
  a_id:{
    type: String,
    required: true,
  },
  p_id: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },

  d_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  h_id: {
    type: String,
    required: true,
  },
  hospitalName: {
    type: String,
    required: true,
  },
  appoDateTime:{
    type:Date,
    required: true,
  },
  createDate:{
    type:Date,
    required: true,
  },
  appoStatus: {
    type: String,
    required: true,
  },
  appoMessage: {
    type: String,
    required: true,
  },
  
});
const getAppointment = mongoose.model("appointment", AppointmentSchema);
module.exports = getAppointment;
