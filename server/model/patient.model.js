var mongoose = require('mongoose'); 
var patientProfileSchema = new mongoose.Schema({
    p_id:{
        type:String,
        required : true
    },
    firstName:{
        type:String,
        required :true
    },
    lastName:{
        type:String,
        required :true
    },
    age:{
        type:Number,
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
        type:String
    },
    gender:{
        type:String
    },
    height:{
        type : Number
    },
    weight:{
        type : Number
    },
    bloodGroup : {
        type:String
    },

})
const patientReg = mongoose.model("patientProfile",patientProfileSchema);
module.exports = patientReg;