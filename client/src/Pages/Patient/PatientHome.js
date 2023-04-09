import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";
import PatientHeader from './PatientHeader';
import PatientNavbar from "./PatientNavbar";
import DoctorSlide from '../Doctor/DoctorSlide';
import HospitalSlide from '../Hospital/HospitalSlide';
export default function PatientHome(props) {
  const navigate = useNavigate();
  const [ {PatientUser} , dispatchUser] = useStateValue();

  useEffect(()=>{
    console.log(PatientUser);
    if(PatientUser === null || PatientUser === "null")
    {
        navigate("/patientLogin");
    }
  },[]);
  return <> 
  <PatientNavbar />
  <PatientHeader/>
  <HospitalSlide /> 
  <DoctorSlide /> 
  {/* <h1>Hello, Patient Home {PatientUser}</h1>  */}
  </>
}
