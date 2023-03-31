
import './App.css';
import PatientRegister from './Pages/Patient/PatientRegister';
import PatientLogin from './Pages/Patient/PatientLogin';
import PatientHome from './Pages/Patient/PatientHome';
import Test from './components/Test';
import Home from './components/Home';
import HospitalHome from './Pages/Hospital/HospitalHome';
import HospitalLogin from './Pages/Hospital/HospitalLogin';
import HospitalRegister from './Pages/Hospital/HospitalRegister';
import DoctorLogin from './Pages/Doctor/DoctorLogin';
import DoctorHome from './Pages/Doctor/DoctorHome';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HospitalAddDoctor from './Pages/Hospital/HospitalAddDoctor';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="home" element = {<Home/>}></Route>
          <Route path="patientHome" element={<PatientHome />}></Route>
          <Route path="patientLogin" element={<PatientLogin />} />
          <Route path="patientRegister" element={<PatientRegister />} />

          <Route path="hospitalHome" element={<HospitalHome />}></Route>
          <Route path="hospitalLogin" element={<HospitalLogin />} />
          <Route path="hospitalRegister" element={<HospitalRegister />} />
          <Route path="addDoctor" element={<HospitalAddDoctor />} />

          <Route path="doctorLogin" element={<DoctorLogin />} />
          <Route path="doctorHome" element={<DoctorHome />}></Route>
          <Route path="*" element={<Navigate replace to="home" />} />
        </Routes>
      </BrowserRouter>
      

    </>
  );
}

export default App;
