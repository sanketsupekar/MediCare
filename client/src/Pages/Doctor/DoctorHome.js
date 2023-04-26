import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";
import DoctorNavbar from "../Doctor/DoctorNavbar";
import DoctorHeader from "../Doctor/DoctorHeader";
import DoctorCard from "../Doctor/DoctorCard";
import PendingAppointments from "./components/PendingAppointment";
import AcceptedAppointments from "./components/AcceptedAppointment";

import AboutUs from "../../components/AboutUs";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";

export default function DoctorHome(props) {
  const navigate = useNavigate();
  const [{ DoctorUser }, dispatchUser] = useStateValue();

  const doctor = {
    d_id: "D101",
    h_id: "H101",
    name: "Sanket",
    speciality: "Brain",
    mail: "sanket@gmail.com",
    phoneNo: 9130420859,
    address: "Pune",
    password: "sans",
    experience: "50",
    charges: 5000,
    qualification: "B.Tech",
  };

  useEffect(() => {
    console.log(DoctorUser);
    if (DoctorUser === null || DoctorUser === "null") {
      navigate("/doctorLogin");
    }
  }, []);
  return (
    <>
      <DoctorNavbar />
      <DoctorHeader />
      <AcceptedAppointments/>
      <PendingAppointments/>
           <AboutUs />
      <ContactUs />
      <Footer />
    
      
    </>
  );
}
