var mongoose = require('mongoose'); 
var DoctorProfileSchema = new mongoose.Schema({
    d_id:{
        type:String,
        required : true
    },
    h_id:{
        type:String,
        required : true
    },
    hospitalName:{
        type:String,
        required : true
    },
    name:{
        type:String,
        required :true
    },
    speciality:{
        type:String,
        required :true
    },
    mail:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    charges:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    profileUrl:{
        type:String
    }
})
const doctorReg = mongoose.model("doctorProfile",DoctorProfileSchema);
module.exports = doctorReg;