import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import LoginRequired from "../LoginRequired";
import { useStateValue } from "../../Context/StateProvider";
import hospitalImage from "../../image/hospital.jpg";

export default function HospitalDetails() {
   const { state } = useLocation();
  const [{ HospitalUser }, dispatchHospital] = useStateValue();
  const [{ PatientUser }, dispatchPatient] = useStateValue();

  const user = {
    h_id: "H104",
    name: "Amit",
    speciality: "Endocrinology",
    mail: "amit123@gmail.com",
    phoneNo: 9130420862,
    address: "At Kolkata",
    password: "amit",
  };

  function bookAppointment() {
    alert("Book Appointment");
  }

  return (
    <>
      {state === null ? (
        <PageNotFound />
      ) : PatientUser !== null || HospitalUser !== null ? (
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container py-5">
            <div className="d-flex flex-column align-items-center justify-content-center w-100">
              <div className="w-100">
                <div className="card mb-4">
                  <div className="card-body  d-flex justify-content-center">
                    <div className="w-50">
                      
                      <img
                        src={hospitalImage}
                        alt="avatar"
                        className="img-fluid"
                        style={{ }}
                      />
                    </div>
                    <div className=" w-50">
                      <h2 className="my-2">{state.name} Hospital</h2>
                      <p className="text-muted mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eaque eveniet eius dolorem sint assumenda,
                        dignissimos magni dicta velit numquam excepturi nobis
                        provident vitae facere totam ea et ab deleniti!
                        Incidunt? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Perspiciatis fugiat minima praesentium
                        provident at quaerat architecto adipisci rerum
                        reiciendis? Incidunt maiores explicabo eaque dolor
                        sequi, saepe facilis error numquam dolorem? Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Ducimus,
                        similique minus saepe distinctio, facilis excepturi,
                        mollitia quos dicta vero et iure adipisci quod itaque
                        ipsum esse praesentium iusto impedit temporibus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptas iusto praesentium voluptatem? Asperiores quo rem aperiam voluptatibus eaque magnam itaque, rerum doloremque earum, vel eum excepturi corrupti officiis et!
                        mollitia quos dicta vero et iure adipisci quod itaque
                        ipsum esse praesentium iusto impedit temporibus!
                       
                      </p>
                    </div>

                    {/* {PatientUser !== null ? (
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
                    )} */}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-around w-100">
                <div className="w-100">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Hospital ID</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{state.h_id}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Hospital Name</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {state.name} Hospital
                          </p>
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
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Address</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{state.address}</p>
                        </div>
                      </div>
                      <hr />
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
