import React from "react";
import headerbg from "../image/header_img.jpg";
import { useNavigate, useParams } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();
  function doctorClick()
  {
        console.log("Doctor Click");
        navigate("/doctorLogin");
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
      <div
        className="card text-center text-light shadow p-3 "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${headerbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height:"100vh",
          backgroundColor: "black",
        }}
      >
        <div className=" header-wrapper w-50 m-auto my-5 py-5">
          <div className="card-title">Welcome</div>
          <div className="card-body">
            <h1 className="card-title fw-bolder">MediCare</h1>
            {/* <p className="card-text fw-lighter ">
              <span className="fw-bolder ">
                Centralized System
              </span>
            </p> */}
          </div>
          <div className="font-weight-bold">
            <button className="btn btn-light m-3" onClick={hospitalClick}><strong> Hospital </strong></button>
            <button className="btn btn-light m-3" onClick={doctorClick} ><strong> Doctor </strong></button>
            <button className="btn btn-light m-3" onClick={patientClick}><strong> Patient </strong></button>
          </div>
        </div>
      </div>
    </>
  );
}
