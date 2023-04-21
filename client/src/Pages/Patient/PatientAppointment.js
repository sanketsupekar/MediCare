import React, { useEffect }  from "react";
import "bootstrap/js/src/collapse.js";
import BackNavbar from "../BackNavbar";
import { useState } from "react";
import { useStateValue } from "../../Context/StateProvider";
import AppointmentCard from "./components/AppointmentCard";
import PendingAppointments from "./components/PendingAppointment";
import { useNavigate } from "react-router-dom";
import AcceptedAppointments from "./components/AcceptedAppointment";

export default function PatientAppointment() {

  return (
    <>
      <BackNavbar/>
      <AcceptedAppointments/>
      <PendingAppointments/>
     
    </>
  );
}
