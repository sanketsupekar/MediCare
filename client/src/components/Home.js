import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header"
import DoctorSlide from "../Pages/Doctor/DoctorSlide";
import HospitalSlide from "../Pages/Hospital/HospitalSlide";
import { useNavigate, useParams } from "react-router-dom";


export default function Home(props) {
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.length !== 0)
    {
      if(localStorage.patient_user !== undefined)
      {
          navigate("/patientLogin");
      }
      else if(localStorage.doctor_user !== undefined)
      {
          navigate("/doctorLogin");
      }
      else if(localStorage.hospital_user !== undefined)
      {
          navigate("/hospitalLogin");
      }
    }
  })
  return (
    <>
      <NavBar/>
      <Header/>
      <HospitalSlide />
      <DoctorSlide />
    </>
  );
}
