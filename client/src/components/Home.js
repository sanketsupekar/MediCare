import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";

export default function Home(props) {
  const navigate = useNavigate();

  function doctorClick()
  {
        console.log("Doctor Click");
  }
  function patientClick()
  {
        console.log("Patient Click");
        navigate("/patientLogin");
  }
  function hospitalClick()
  {
        console.log("Hospital Click");
        navigate("/hospitalLogin");
  }
  return (
    <>
      <h1>Hello, Home </h1>
      <div className="btn-group mx-auto p-2" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary mx-5" onClick={doctorClick}>
          Doctor
        </button>
        <button type="button" className="btn btn-primary mx-5" onClick={patientClick}>
          Patient
        </button>
        <button type="button" className="btn btn-primary mx-5" onClick={hospitalClick}>
          Hospital
        </button>
      </div>
    </>
  );
}
