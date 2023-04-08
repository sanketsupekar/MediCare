import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";
import DoctorNavbar from "../Doctor/DoctorNavbar";
import DoctorHeader from "../Doctor/DoctorHeader";
import DoctorCard from "../Doctor/DoctorCard";

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
      {/* <div className="d-flex justify-content-between flex-wrap">
          <DoctorCard {...doctor}/>
          <DoctorCard {...doctor}/>
          <DoctorCard {...doctor}/>
          <DoctorCard {...doctor}/>
          <DoctorCard {...doctor}/>
          <DoctorCard {...doctor}/>
          <DoctorCard {...doctor}/>
          <DoctorCard {...doctor}/>
      </div> */}
      
    </>
  );
}
