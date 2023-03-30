
import './App.css';
import PatientRegister from './components/PatientRegister';
import PatientLogin from './components/PatientLogin';
import PatientHome from './components/PatientHome';
import Test from './components/Test';
import Home from './components/Home';
import HospitalHome from './Pages/Hospital/HospitalHome';
import HospitalLogin from './Pages/Hospital/HospitalLogin';
import HospitalRegister from './Pages/Hospital/HospitalRegister';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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

          <Route path="*" element={<Navigate replace to="home" />} />
        </Routes>
      </BrowserRouter>
      

    </>
  );
}

export default App;
