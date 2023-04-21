import React, { useEffect, useState } from "react";
import BackNavbar from "./BackNavbar";
import DatePicker from "react-datepicker";
import addDays from "date-fns/addDays";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppointmentCard from "../Pages/Doctor/components/AppointmentCard";
import {
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

export default function Test(props) {
  const url = "/api/doctorAppointment?search=";
  const [appointment, setAppointment] = useState({
    p_id: "P101",
    firstName: "Sanket",
    lastName: "Supekar",
    gender: "Male",
    phoneNo: "9130420859",
    d_id: "D101",
    name: "Dr. Ramdev Baba",
    h_id: "H101",
    hospitalName: "Patanjali Hospital",
    appoDateTime: new Date(),
    createDate: new Date(),
    appoStatus: "Pending",
    appoMessage:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolorum, modi, corporis tempore architecto ea laborum illum dolores rem nesciunt eos possimus. ",
  });

  async function fetchingData() {
    const respones = await fetch(url + "D104").catch((e) => console.error(e));
    const json = respones ? await respones.json() : [];
    console.log(json);
  }


useEffect(()=>{
  fetchingData();
},[])
  return (
    <>
      <header className="py-3 mb-4 border-bottom">
    <div className="container d-flex flex-wrap justify-content-center">
      <a className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
      <FontAwesomeIcon icon={faSpinner} className="mx-3" />
        <span className="fs-5">Pending Appointments</span>
      </a>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0">
        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"></input>
      </form>
    </div>
  </header>
  <div className="d-flex justify-content-around flex-wrap">
  <AppointmentCard/>
  <AppointmentCard/>
  <AppointmentCard/>

  <AppointmentCard/>
  </div>
  


    </>
  );
}
