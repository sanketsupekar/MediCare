import React, { useEffect, useState } from "react";


export default function ProfileInfo(props) {
  return (
    <>
            <div class="main-body w-100">
            <div class="d-flex justify-content-center text-dark">
              <div class="m-3 w-25">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Admin"
                        class="rounded-circle"
                        width="150"
                      ></img>
                      <div class="mt-3">
                        <h4>{props.firstName}</h4>
                        <h4>{props.lastName}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="m-3 w-75">
                <div class="card">
                  <div className="d-flex my-3 h-100">
                    <div className="d-flex flex-column justify-content-around mx-5 w-100">
                      <div className="d-flex border-top border-bottom p-2">
                        <label className="fw-bold mx-2"> Patient ID : </label>
                        <label>{props.p_id}</label>
                      </div>
                      <div className="d-flex border-top border-bottom p-2">
                        <label className="fw-bold  mx-2"> First Name :</label>
                        <label>{props.firstName}</label>
                      </div>
                      <div className="d-flex border-top border-bottom p-2">
                        <label className="fw-bold  mx-2"> Last Name :</label>
                        <label>{props.lastName}</label>
                      </div>
                      <div className="d-flex border-top border-bottom p-2 flex-wrap">
                        <label className="fw-bold  mx-2"> Age :</label>
                        <label>{props.age}</label>
                      </div>

                      <div className="d-flex border-top border-bottom p-2">
                        <label className="fw-bold mx-2"> Phone No : </label>
                        <label>{props.phoneNo}</label>
                      </div>
                      <div className="d-flex border-top border-bottom p-2">
                        <label className="fw-bold  mx-2"> Address :</label>
                        <label>{props.address}</label>
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
