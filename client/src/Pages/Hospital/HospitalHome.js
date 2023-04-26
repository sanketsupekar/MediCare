import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";
import HospitalNavbar from "../Hospital/HospitalNavbar";
import HospitalHeader from "../Hospital/HospitalHeader"
import DoctorSlide from '../Doctor/DoctorSlide';
import AboutUs from "../../components/AboutUs";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";

export default function HospitalHome(props) {
    const navigate = useNavigate();
  const [ {HospitalUser} , dispatchUser] = useStateValue();

  useEffect(()=>{
    console.log(HospitalUser);
    if(HospitalUser === null || HospitalUser === "null")
    {
        navigate("/hospitalLogin");
    }
  },[]);
  return <>
    <HospitalNavbar />
    <HospitalHeader />
    <DoctorSlide />
    <AboutUs />
      <ContactUs />
      <Footer />
  </>
}
