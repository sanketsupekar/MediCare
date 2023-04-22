import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendar,
  faHospitalUser,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function AppointmentCard(props) {
  const URL = "/api/updateAppointmentStatus";
  const [rejected,setRejected] = useState(0);
  const [rejectReason, setReason] = useState("");
  // rejected => 0 (initial State), 1 (Open Text Box), 2(Confirm Reject)
  
  const navigate = useNavigate();
  const [aStatus, setStatus] = useState({});
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");

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

  async function updateStatus(url, data) {
    console.log(data);
    try {
      const respones = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((e) => console.log("Error : ", e));
      const json = await respones.json();
      if (respones.status !== 200) {
        setErrorType(json.message);
        setError(true);
        setTimeout(() => {
          setError(false);
          console.log(json);
        }, 1500);
      } else if (respones.status == 200) {
        console.log("Done");
      }
    } catch (e) {
      console.log("Error : ", e);
    }
  }

  function acceptClick(e) {
    setStatus({...aStatus,
      a_id: props.a_id,
      appoStatus: "Accepted",
    });
      
    //alert("Accepted");
  }
  function rejectClick(e) {
    if(rejected === 1)
    {
      setStatus({...aStatus,
        a_id: props.a_id,
        appoStatus: "Rejected",
        appoMessage:rejectReason,
      });
    }
    setRejected(1);
  }
  function completeClick(e) {
    alert("Complete");
  }
  function viewDetailsClick(){
    navigate("/appointmentDetails",{ state: props });
  }

useEffect(()=>{
  updateStatus(URL,aStatus);
},[aStatus]);
  return (
    <>
      <div
        className="item mx-3 mb-5"
        style={{
          width: "20rem",
        }}
      >
        <div class="main-body">
          <div class="d-flex flex-column text-dark">
            <div className="card swiper-slide">
              <div className="card-content align-items-start">
                <h1 className="name">
                  <FontAwesomeIcon icon={faHospitalUser} className="mx-3" />
                  {props.firstName + " " + props.lastName}{" "}
                </h1>

                <h1 className="specialist">
                  <FontAwesomeIcon icon={faClock} className="mx-3" />
                  {getTime(props.appoDateTime)}
                </h1>
                <h1 className="specialist">
                  <FontAwesomeIcon icon={faCalendar} className="mx-3" />

                  {getDate(props.appoDateTime)}
                </h1>
                <h1 className="specialist">
                  <FontAwesomeIcon icon={faHandshake} className="mx-3" />

                  {props.appoStatus}
                </h1>
                <p className="description text-start">{props.appoMessage}</p>

                {
                  (rejected === 1) ?(<textarea
                    type="text"
                    id="rejectionReason"
                    className="form-control"
                    value={rejectReason}
                    onChange={(e) =>
                    setReason(e.target.value)
                    }
                    placeholder={"Rejection Reason"}
                    minLength={5}
                    maxLength={500}
                    rows={2}
                    required
                  />):(<></>) 
                }
                

                {props.appoStatus === "Pending" ? (<div class="d-flex justify-content-around text-dark mt-3 w-100">
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={acceptClick}
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                   disabled = {rejected === 1 && rejectReason === ""}
                    onClick={rejectClick}
                  >
                    {rejected === 0 ? "Reject" : (rejected === 1 ? "Confirm Reject" : "")}
                  </button>
                </div>):<></>}

               
                {props.appoStatus === "Accepted" ? (<div class="d-flex justify-content-around text-dark w-100">

                <button
                    type="button"
                    class="btn btn-dark"
                    onClick={viewDetailsClick}
                  >
                    View Details
                  </button>
                  
                  <button
                    type="button"
                    class="btn btn-dark"
                    onClick={completeClick}
                  >
                    Complete
                  </button>
                </div>):<></>}

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
