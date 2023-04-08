//console.log("Project Runnig");
const express = require("express");
const apiRouter = require("./routes")
const port = process.env.PORT || 3001;
const {connectToDb} = require("./controllers/mongoose.controller");
const Doctor = require("../server/model/doctor.module");
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

connectToDb();
app.use("/api",apiRouter);
app.use("*", (req, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
  console.log("Server is ready to listening....",port);
});


const data = [{
  d_id: 'D104',
  h_id:'H102',
  hospitalName : "Rajesh",
  name: 'Manas Sangle',
  speciality: 'Endocrinologist',
  mail: 'manas@gmail.com',
  phoneNo: 2221414142,
  address: 'Dhule',
  password: 'manas',
  experience: '29',
  charges: 5000,
  qualification: 'MBBS'
},
{
  d_id: 'D105',
  name: 'Raj Patel',
  h_id:'H102',
  hospitalName : "Rajesh",
  speciality: 'Cardiologist',
  mail: 'rajpatel@gmail.com',
  phoneNo: 2224231234,
  address: 'Mumbai',
  password: 'raj',
  experience: '15',
  charges: 8000,
  qualification: 'MD'
},
{
  d_id: 'D106',
  name: 'Anjali Desai',
  h_id:'H103',
  hospitalName : "Smita",
  speciality: 'Dermatologist',
  mail: 'anjalidesai@gmail.com',
  phoneNo: 2223456789,
  address: 'Pune',
  password: 'anjali',
  experience: '10',
  charges: 6000,
  qualification: 'MBBS, MD'
},
{
  d_id: 'D107',
  name: 'Kamal Verma',
  h_id:'H104',
  hospitalName : "Amit",
  speciality: 'Neurologist',
  mail: 'kamalverma@gmail.com',
  phoneNo: 2225432198,
  address: 'Delhi',
  password: 'kamal',
  experience: '20',
  charges: 10000,
  qualification: 'DM'
},
{
  d_id: 'D108',
  name: 'Neha Shah',
  h_id:'H105',
  hospitalName : "Nileema",
  speciality: 'Gynecologist',
  mail: 'nehashah@gmail.com',
  phoneNo: 2227896543,
  address: 'Ahmedabad',
  password: 'neha',
  experience: '12',
  charges: 7000,
  qualification: 'MBBS, MS'
},
{
  d_id: 'D109',
  name: 'Amit Gupta',
  h_id:'H106',
  hospitalName : "Rahul",
  speciality: 'Ophthalmologist',
  mail: 'amitgupta@gmail.com',
  phoneNo: 2226547890,
  address: 'Jaipur',
  password: 'amit',
  experience: '18',
  charges: 9000,
  qualification: 'MS'
},
{
  d_id: 'D110',
  name: 'Sneha Patel',
  h_id:'H102',
  hospitalName : "Rajesh",
  speciality: 'Psychiatrist',
  mail: 'snehapatel@gmail.com',
  phoneNo: 2229876543,
  address: 'Bengaluru',
  password: 'sneha',
  experience: '8',
  charges: 8000,
  qualification: 'MBBS, MD'
},
{
  d_id: 'D111',
  name: 'Rohan Deshpande',
  h_id:'H102',
  hospitalName : "Rajesh",
  speciality: 'Orthopedist',
  mail: 'rohandeshpande@gmail.com',
  phoneNo: 2225647389,
  address: 'Nashik',
  password: 'rohan',
  experience: '25',
  charges: 12000,
  qualification: 'MBBS, MS'
}];

// Doctor.insertMany(data).then(function () {
//   console.log("Successfully saved defult items to DB");
// })
// .catch(function (err) {
//   console.log(err);
// });