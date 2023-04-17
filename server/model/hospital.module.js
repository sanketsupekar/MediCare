var mongoose = require('mongoose'); 
var HospitalProfileSchema = new mongoose.Schema({
    h_id:{
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
    profileUrl:{
        type:String,
        
    }
})
const hospitalReg = mongoose.model("hospitalProfile",HospitalProfileSchema);
module.exports = hospitalReg;