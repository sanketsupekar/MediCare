import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppointmentCard from "./AppointmentCard";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "../../../Context/StateProvider";
import { useNavigate } from "react-router-dom";

export default function AcceptedAppointments(props) {
  const URL = "/api/patientAppointment?search=";
  const STATUS = "Rejected";
  const navigate = useNavigate();
  function backClick() {
    navigate(-1);
  }

  const [appointment, setAppointment] = useState([]);
  const [{ PatientUser, dispatchUser }] = useStateValue();

  async function fetchingData(url, patient, status) {
    const respones = await fetch(url + patient + "+" + status).catch((e) =>
      console.error(e)
    );
    const json = respones ? await respones.json() : [];
    setAppointment(json);
    console.log(appointment);
  }
  useEffect(() => {
    fetchingData(URL, PatientUser, STATUS);
  }, []);
  return (
    <>
      {appointment.length !== 0 ? (
        <section className="mt-5">
          <div class="two alt-two py-3 mt-5 mb-5">
            <h1>
              Rejected Appointment's
              <span>There are {appointment.length} Rejected Appointments</span>
            </h1>
          </div>
          <div className="d-flex justify-content-around flex-wrap container">
            {appointment.length !== 0 ? (
              appointment.map((appo, key) => {
                return <AppointmentCard key={key} {...appo} />;
              })
            ) : (
              <></>
            )}
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
