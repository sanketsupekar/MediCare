import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageNotFound from "../Pages/PageNotFound";
import LoginRequired from "../Pages/LoginRequired";
export default function Test() {

  const userData =
    {
        d_id: "D101",
        h_id: "H101",
        hospitalName : "Sairam",
        name: "Sanket Supekar",
        speciality: "Brain",
        mail: "sanket@gmail.com",
        phoneNo: 9130420859,
        address: "Pune",
        password: "sans",
        experience: "50",
        charges: 5000,
        qualification: "B.Tech",
    };

    function bookAppointment()
    {
      alert("Book Appointment");
    }
  return (
    <>
      <LoginRequired />
    </>
  );
}
