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
  const searchUrl = "api/patient?search=";
  const [patientUser, setPatientData] = useState({
    _id: null,
    p_id: "",
    firstName: "",
    lastName: "",
    age: "",
    phoneNo: "",
    address: "",
    password: "",
  });

  async function fetchingData() {
    const respones = await fetch(searchUrl + PatientUser).catch((e) =>
      console.error(e)
    );
    const json = respones ? await respones.json() : [];
    setPatientData(json);
    console.log(json);
  }

  useEffect(()=>{
    console.log(PatientUser);
    if(PatientUser === null || PatientUser === "null")
    {
        navigate("/patientLogin");
    }
  },[]);

  useEffect(() => {
    fetchingData();
  }, [PatientNavbar]); // eslint-disable-line

  return <> 
  <PatientNavbar />
  <PatientHeader {...patientUser}/>
  <HospitalSlide /> 
  <DoctorSlide /> 
  {/* <h1>Hello, Patient Home {PatientUser}</h1>  */}
  </>
}
