import React, { useState, useEffect } from "react";
import "./TestDesign.css";
export default function Test(props) {
  const user = {
    firstName: "Sanket Supekar",
    lastName: "Sanket Supekar",
    phone: "9130420859",
    email: "sanket@gmail.com",
  };
  return (
    <>
      <div class="container">
        <div class="main-body">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      class="rounded-circle"
                      width="150"
                    ></img>
                    <div class="mt-3">
                      <h4>John Doe</h4>
                      <p class="text-secondary mb-1">Full Stack Developer</p>
                      <p class="text-muted font-size-sm">
                        Bay Area, San Francisco, CA
                      </p>
                      <button class="btn btn-primary">Follow</button>
                      <button class="btn btn-outline-primary">Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 mb-3">
              <div class="card">
                <div className="d-flex my-3 h-100">
                  <div className="d-flex flex-column justify-content-around mx-3">
                    <div className="d-flex">
                      <label className="fw-bold mx-2"> First Name : </label>
                      <label>{user.firstName}</label>
                    </div>
                    <div className="d-flex">
                      <label className="fw-bold  mx-2"> Last Name :</label>
                      <label>{user.lastName}</label>
                    </div>
                    <div className="d-flex">
                      <label className="fw-bold  mx-2"> Phone Number :</label>
                      <label>{user.phone}</label>
                    </div>
                    <div className="d-flex flex-wrap ">
                      <label className="fw-bold  mx-2"> Email Address :</label>
                      <label>{user.email}</label>
                    </div>

                    <div className="d-flex">
                      <label className="fw-bold mx-2"> First Name : </label>
                      <label>{user.firstName}</label>
                    </div>
                    <div className="d-flex">
                      <label className="fw-bold  mx-2"> Last Name :</label>
                      <label>{user.lastName}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-md-4 mb-3">
              <div class="card">
                <div className="d-flex my-3 h-100">
                  <div className="d-flex flex-column justify-content-around mx-3">
                    <div className="d-flex">
                      <label className="fw-bold mx-2"> First Name : </label>
                      <label>{user.firstName}</label>
                    </div>
                    <div className="d-flex">
                      <label className="fw-bold  mx-2"> Last Name :</label>
                      <label>{user.lastName}</label>
                    </div>
                    <div className="d-flex">
                      <label className="fw-bold  mx-2"> Phone Number :</label>
                      <label>{user.phone}</label>
                    </div>
                    <div className="d-flex flex-wrap ">
                      <label className="fw-bold  mx-2"> Email Address :</label>
                      <label>{user.email}</label>
                    </div>

                    <div className="d-flex">
                      <label className="fw-bold mx-2"> First Name : </label>
                      <label>{user.firstName}</label>
                    </div>
                    <div className="d-flex">
                      <label className="fw-bold  mx-2"> Last Name :</label>
                      <label>{user.lastName}</label>
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
