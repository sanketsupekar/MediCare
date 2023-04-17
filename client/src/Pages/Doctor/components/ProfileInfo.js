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
                          <p className="mb-0">Doctor ID</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{props.d_id}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Doctor Name</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{props.name}</p>
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
                            {props.hospitalName}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Experince</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{props.experience}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Charges</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{props.charges}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Qualification</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {props.qualification}
                          </p>
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
                    </div>
                  </div>
                </div>
              </div>
    </>
  );
}
