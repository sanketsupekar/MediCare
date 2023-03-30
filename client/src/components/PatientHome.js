import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";

export default function PatientHome(props) {
  const navigate = useNavigate();
  const [ {PatientUser} , dispatchUser] = useStateValue();

  useEffect(()=>{
    console.log(PatientUser);
    if(PatientUser === null)
    {
        navigate("/patientLogin");
    }
  },[]);
  return <> <h1>Hello, Patient Home {PatientUser}</h1> </>
}
