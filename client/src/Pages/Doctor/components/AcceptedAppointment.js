import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppointmentCard from "./AppointmentCard";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "../../../Context/StateProvider";

export default function AcceptedAppointments(props) {
  const URL = "/api/doctorAppointment?search=";
  const STATUS = "Accepted";
  
  const [{ DoctorUser, dispatchUser }] = useStateValue();

  const [appointment, setAppointment] = useState([]);

  async function fetchingData(url,doctorId,status) {
    const respones = await fetch(url + doctorId +"+"+status).catch((e) => console.error(e));
    const json = respones ? await respones.json() : [];
    setAppointment(json);
   // console.log(appointment);
  }

  useEffect(() => {
    fetchingData(URL,DoctorUser,STATUS);
  });
  return (
    <>
      <section className="mt-5">
        <div class="two alt-two py-3 mb-4">
          <h1>
            Scheduled Appointment's
            <span>There are {appointment.length} Scheduled Appointments</span>
          </h1>
        </div>
        <div className="d-flex justify-content-around flex-wrap container">
        {appointment.length !== 0 ? appointment.map((appo, key) => {
          return (
            <AppointmentCard key={key} {...appo}/>
          );
        }) : <></>}
        </div>
      </section>
    </>
  );
}
