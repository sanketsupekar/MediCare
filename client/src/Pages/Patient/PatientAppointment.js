import React, { useEffect }  from "react";
import "bootstrap/js/src/collapse.js";
import BackNavbar from "../BackNavbar";
import { useState } from "react";
import { useStateValue } from "../../Context/StateProvider";
import AppointmentCard from "./components/AppointmentCard";
import PendingAppointment from "./components/PendingAppointment";
import { useNavigate } from "react-router-dom";
import AcceptedAppointment from "./components/AcceptedAppointment";
import RejectedAppointment from "./components/RejectedAppointment";
export default function PatientAppointment() {

  return (
    <>
      <BackNavbar/>
      <AcceptedAppointment/>
      <PendingAppointment/>
      <RejectedAppointment />
     
    </>
  );
}
