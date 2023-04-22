
import './App.css';
import PatientRegister from './Pages/Patient/PatientRegister';
import PatientLogin from './Pages/Patient/PatientLogin';
import PatientHome from './Pages/Patient/PatientHome';
import PatientDetails from './Pages/Patient/PatientDetails';
import Test from './components/Test';
import Home from './components/Home';
import HospitalHome from './Pages/Hospital/HospitalHome';
import HospitalLogin from './Pages/Hospital/HospitalLogin';
import HospitalRegister from './Pages/Hospital/HospitalRegister';
import HospitalExplore from './Pages/Hospital/HospitalExplore';
import DoctorLogin from './Pages/Doctor/DoctorLogin';
import DoctorHome from './Pages/Doctor/DoctorHome';
import DoctorDetails from './Pages/Doctor/DoctorDetails';
import LoginRequired from './Pages/LoginRequired';


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HospitalAddDoctor from './Pages/Hospital/HospitalAddDoctor';
import DoctorExplore from './Pages/Doctor/DoctorExplore';
import HospitalDetails from './Pages/Hospital/HospitalDetails';
import GetAppointment from './Pages/Patient/GetAppointment';
import PatientAppointment from './Pages/Patient/PatientAppointment';
import AppointmentDetails from './Pages/Patient/components/AppointmentDetails';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="home" element = {<Home/>}></Route>
          <Route path="patientHome" element={<PatientHome />}></Route>
          <Route path="patientLogin" element={<PatientLogin />} />
          <Route path="patientRegister" element={<PatientRegister />} />
          <Route path="patientDetails" element={<PatientDetails />} />
          <Route path="getAppointment" element={<GetAppointment />} />
          <Route path="patientAppointment" element={<PatientAppointment />} />
          <Route path="appointmentDetails" element={<AppointmentDetails />} />     

          <Route path="hospitalHome" element={<HospitalHome />}></Route>
          <Route path="hospitalLogin" element={<HospitalLogin />} />
          <Route path="hospitalRegister" element={<HospitalRegister />} />
          <Route path="hospitalExplore" element={<HospitalExplore />}></Route>
          <Route path="hospitalDetails" element={<HospitalDetails />} />
          <Route path="addDoctor" element={<HospitalAddDoctor />} />

          <Route path="doctorLogin" element={<DoctorLogin />} />
          <Route path="doctorHome" element={<DoctorHome />}></Route>
          <Route path="doctorExplore" element={<DoctorExplore />}></Route>
          <Route path="doctorDetails" element={<DoctorDetails />}></Route>
          <Route path="test" element={<Test/>}> </Route>
          <Route path='loginRequired' element={<LoginRequired/>}></Route>

          <Route path="*" element={<Navigate replace to="home" />} />
        </Routes>
      </BrowserRouter>
      

    </>
  );
}

export default App;
