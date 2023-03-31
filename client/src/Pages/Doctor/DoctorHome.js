import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";
import DoctorNavbar from "../Doctor/DoctorNavbar";
import DoctorHeader from "../Doctor/DoctorHeader"

export default function DoctorHome(props) {
    const navigate = useNavigate();
  const [ {DoctorUser} , dispatchUser] = useStateValue();

  useEffect(()=>{
    console.log(DoctorUser);
    if(DoctorUser === null || DoctorUser === "null")
    {
        navigate("/doctorLogin");
    }
  },[]);
  return <>
    <DoctorNavbar />
    <DoctorHeader />
  </>
}
