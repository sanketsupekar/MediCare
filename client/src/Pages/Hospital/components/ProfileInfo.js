import React, { useEffect, useState } from "react";


export default function ProfileInfo(props) {
  return (
    <>
           <div className="d-flex justify-content-around w-100">
                <div className="w-100">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Hospital ID</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{props.h_id}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Hospital Name</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {props.name} Hospital
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Speciality</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{props.speciality}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Mail</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{props.mail}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Phone No.</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{props.phoneNo}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Address</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{props.address}</p>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
    </>
  );
}
