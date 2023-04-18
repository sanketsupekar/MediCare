var mongoose = require('mongoose'); 
var next_id_gen = new mongoose.Schema({
    id:{
        type:String,
    },
    hospital_id:{
        type:String,
    },
    doctor_id:{
        type:String,
    },
    patient_id:{
        type:String,
    },
    appointment_id:{
        type:String,
    }
})
   
const nextID = mongoose.model("next_user_id",next_id_gen);
module.exports = nextID;