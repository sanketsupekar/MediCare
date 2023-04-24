import React, { useEffect } from "react";
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
      <h5
        className="text-center"
        style={{
          opacity: "0.5",
          color: "BLACK",
          position: "absolute",
          left: "45%",
          top:"10%"
        }}
      >
        No Appointments
      </h5>
      <BackNavbar />
      <AcceptedAppointment />
      <PendingAppointment />
      <RejectedAppointment />
    </>
  );
}
