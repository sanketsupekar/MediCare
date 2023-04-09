import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import LoginRequired from "../LoginRequired";
import { useStateValue } from "../../Context/StateProvider";

export default function DoctorDetails() {
  const { state } = useLocation();
  const [{ HospitalUser }, dispatchHospital] = useStateValue();
  const [{ PatientUser }, dispatchPatient] = useStateValue();

  const user = {
    d_id: "D101",
    h_id: "H101",
    hospitalName: "Sairam",
    name: "Sanket Supekar",
    speciality: "Brain",
    mail: "sanket@gmail.com",
    phoneNo: 9130420859,
    address: "Pune",
    password: "sans",
    experience: "50",
    charges: 5000,
    qualification: "B.Tech",
  };

  function bookAppointment() {
    alert("Book Appointment");
  }
  function editDoctor() {
    alert("Doctor Edit");
  }
  return (
    <>
      {state === null ? (
        <PageNotFound />
      ) : PatientUser !== null || HospitalUser !== null ? (
        <section style={{ backgroundColor: "#eee", height: "100vh" }}>
          <div className="container py-5">
            <div className="d-flex flex-column align-items-center justify-content-center w-100">
              <div className="w-100">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle img-fluid"
                      style={{ width: "150px" }}
                    />
                    <h5 className="my-2">Dr. {state.name}</h5>
                    <p className="text-muted mb-4">
                      {state.speciality} Specialist
                    </p>

                    {PatientUser !== null ? (
                      <div className="d-flex justify-content-center mb-2">
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={bookAppointment}
                        >
                          Book Appointment
                        </button>
                      </div>
                    ) : (
                      <></>
                    )}

                    {HospitalUser !== null ? (
                      <div className="d-flex justify-content-center mb-2">
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={editDoctor}
                        >
                          Edit Doctor
                        </button>
                      </div>
                    ) : (
                      <></>
                    )}

                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-around w-100">
                <div className="w-100">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Doctor ID</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{state.d_id}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Doctor Name</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{state.name}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Speciality</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{state.speciality}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Mail</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{state.mail}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Phone No.</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{state.phoneNo}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-100">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Hospital Name</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {state.hospitalName}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Experince</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{state.experience}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Charges</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{state.charges}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Qualification</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {state.qualification}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Address</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{state.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <LoginRequired></LoginRequired>
      )}
    </>
  );
}
