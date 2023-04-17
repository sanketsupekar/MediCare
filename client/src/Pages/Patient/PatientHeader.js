import headerbg from "../../image/header_img.jpg";
import { useStateValue } from "../../Context/StateProvider";
import React, { useEffect, useState } from "react";

export default function PatientHeader(patientUser) {

  return (
    <>
      <div
        className="card text-center text-light shadow p-3 "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${headerbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height:"90vh",
          backgroundColor: "black",
        }}
      >
        <div className=" header-wrapper w-75 m-auto my-5 py-5">
          <div className="card-title">Welcome</div>
          <div className="card-body">
            <h1 className="card-title fw-bolder">
              Hey, {patientUser.firstName}
            </h1>
            {/* <p className="card-text fw-lighter ">
              <span className="fw-bolder ">
                This is a simple phone directory web application which supports
                : Create, Update, Delete And Search Contact in phone Directory
                with responsive user interface.
              </span>
            </p> */}
          </div>
          <div class="main-body">
            <div class="d-flex justify-content-center text-dark">
              <div class="m-3 w-25">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                      <img
                  
                        // src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        
                        src={patientUser.profileUrl === undefined ? "https://bootdey.com/img/Content/avatar/avatar7.png" : patientUser.profileUrl}

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
                </div>
              </div>

              <div class="m-3 w-50">
                <div class="card">
                  <div className="d-flex my-3 h-100">
                    <div className="d-flex flex-column justify-content-around mx-5 w-100">
                      <div className="d-flex border-top border-bottom p-2">
                        <label className="fw-bold mx-2"> Patient ID : </label>
                        <label>{patientUser.p_id}</label>
                      </div>
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
                        <label className="fw-bold mx-2"> Phone No : </label>
                        <label>{patientUser.phoneNo}</label>
                      </div>
                      <div className="d-flex border-top border-bottom p-2">
                        <label className="fw-bold  mx-2"> Address :</label>
                        <label>{patientUser.address}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
