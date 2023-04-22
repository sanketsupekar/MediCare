import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackNavbar from "../../BackNavbar";
import {
  faClock,
  faCalendar,
  faUserDoctor,
  faHandshake,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";

export default function AppointmentDetails(props) {
  const { state } = useLocation();
  const p_id = state.p_id;
  const d_id = state.d_id;
  const a_id = state.a_id;
  const patientURL = "api/patient?search=";
  const doctorURL = "api/doctor?search=";

  async function fetchingUserData(url, id, setUser) {
    const respones = await fetch(url + id).catch((e) => console.error(e));
    const json = respones ? await respones.json() : [];
    Array.isArray(json) ? setUser(json[0]) : setUser(json);
    console.log(json);
  }

  const [patientUser, setPatientUser] = useState({});
  const [doctorUser, setDoctorUser] = useState({});
  const [appointment, setAppointment] = useState({});
  function getDate(dateTemp) {
    const date = new Date(dateTemp);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const result =
      days[date.getDay()] +
      ", " +
      months[date.getMonth()] +
      " " +
      date.getDate() +
      " " +
      date.getFullYear();
    return result;
  }

  function getTime(dateTemp) {
    const date = new Date(dateTemp);
    const result = new Date(date).toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
    return result;
  }
  useEffect(() => {
    fetchingUserData(patientURL, p_id, setPatientUser);
    fetchingUserData(doctorURL, d_id, setDoctorUser);
  }, []);

  useEffect(() => {
    console.log(state);
  });
  return (
    <>
    <BackNavbar/>
      {state !== null ? (
        <div class="container mt-5 pt-5 d-flex justify-content-around">
          <div class="main-body" style={{ width: "25rem" }}>
            <div class="d-flex flex-column justify-content-center text-dark border">
              <div class="m-3">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    src={
                      patientUser.profileUrl === undefined
                        ? "https://bootdey.com/img/Content/avatar/avatar7.png"
                        : patientUser.profileUrl
                    }
                    alt="Admin"
                    class="rounded-circle"
                    width="150"
                  ></img>
                  <div class="mt-3">
                    <h4>{patientUser.firstName}</h4>
                    <h4>{patientUser.lastName}</h4>
                  </div>
                </div>
              </div>

              <div class="m-3">
                <div className="d-flex flex-column justify-content-around">
                  <div className="d-flex border-top border-bottom p-2">
                    <label className="fw-bold  mx-2"> First Name :</label>
                    <label>{patientUser.firstName}</label>
                  </div>
                  <div className="d-flex border-top border-bottom p-2">
                    <label className="fw-bold  mx-2"> Last Name :</label>
                    <label>{patientUser.lastName}</label>
                  </div>
                  <div className="d-flex border-top border-bottom p-2 flex-wrap">
                    <label className="fw-bold  mx-2"> Age :</label>
                    <label>{patientUser.age}</label>
                  </div>
                  <div className="d-flex border-top border-bottom p-2">
                    <label className="fw-bold mx-2"> Blood Group : </label>
                    <label>{patientUser.bloodGroup}</label>
                  </div>
                  <div className="d-flex border-top border-bottom p-2">
                    <label className="fw-bold mx-2"> Gender : </label>
                    <label>{patientUser.gender}</label>
                  </div>
                  <div className="d-flex border-top border-bottom p-2">
                    <label className="fw-bold mx-2"> Phone No : </label>
                    <label>{patientUser.phoneNo}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="main-body" style={{ width: "25rem" }}>
            <div class="d-flex flex-column justify-content-center h-100 text-dark ">
              <div class="m-3 border">
                <div class="d-flex flex-column align-items-center text-center">
                  {/* <img
                    src={
                      props.profileUrl === undefined
                        ? "https://bootdey.com/img/Content/avatar/avatar7.png"
                        : props.profileUrl
                    }
                    alt="Admin"
                    class="rounded-circle"
                    width="150"
                  ></img> */}
                  <h1>
                    {" "}
                    <FontAwesomeIcon icon={faHandshake} className="mx-3" />
                  </h1>
                  <div class="mt-3">
                    <h5>
                      <FontAwesomeIcon icon={faClock} className="mx-3" />
                      {getTime(state.appoDateTime)}
                    </h5>
                    <h5>
                      <FontAwesomeIcon icon={faCalendar} className="mx-3" />
                      {getDate(state.appoDateTime)}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="main-body" style={{ width: "25rem" }}>
            <div class="d-flex flex-column justify-content-center text-dark border h-100">
              <div class="m-3">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    src={
                      doctorUser.profileUrl === undefined
                        ? "https://bootdey.com/img/Content/avatar/avatar7.png"
                        : doctorUser.profileUrl
                    }
                    alt="Admin"
                    class="rounded-circle"
                    width="150"
                  ></img>
                  <div class="mt-3">
                    <h4>{doctorUser.firstName}</h4>
                    <h4>{doctorUser.lastName}</h4>
                  </div>
                </div>
              </div>

              <div class="m-3">
                <div className="d-flex flex-column justify-content-around">
                  <div className="d-flex border-top border-bottom p-2">
                    <label className="fw-bold  mx-2"> Name :</label>
                    <label>{"Dr. " + doctorUser.name}</label>
                  </div>
                  <div className="d-flex border-top border-bottom p-2">
                    <label className="fw-bold  mx-2"> Hospital Name :</label>
                    <label>{doctorUser.hospitalName}</label>
                  </div>
                  <div className="d-flex border-top border-bottom p-2 flex-wrap">
                    <label className="fw-bold  mx-2"> Speciality :</label>
                    <label>{doctorUser.speciality}</label>
                  </div>
                  <div className="d-flex border-top border-bottom p-2">
                    <label className="fw-bold  mx-2"> Charges :</label>
                    <label>{doctorUser.charges}</label>
                  </div>
                  <div className="d-flex border-top border-bottom p-2">
                    <label className="fw-bold  mx-2"> Qualification :</label>
                    <label>{doctorUser.qualification}</label>
                  </div>
                  <div className="d-flex border-top border-bottom p-2">
                    <label className="fw-bold mx-2"> Phone No : </label>
                    <label>{doctorUser.phoneNo}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
