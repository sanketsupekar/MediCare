import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import DoctorListRow from "./DoctorListRow";
import { useStateValue } from "../../../Context/StateProvider";

export default function DoctorList({ doctorData }) {
  //console.log(doctorData);
  const [{ HospitalUser }, dispatchHospital] = useStateValue();

  return (
    <>
      <div className="d-flex justify-content-around w-100">
        <div className="w-100">
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="text-monospace mb-0">Doctor ID</h6>
                </div>
                <div className="col-sm-2">
                  <h6 className="mb-0">Doctor Name</h6>
                </div>
                <div className="col-sm-2">
                  <h6 className="mb-0">Specility</h6>
                </div>
                <div className="col-sm-2">
                  <h6 className="mb-0">View</h6>
                </div>
                {
                  HospitalUser != null ? 
                <div className="col-sm-2">
                  <h6 className="mb-0">Delete Doctor</h6>
                </div> : <></>}

              </div>
              <hr />
              {doctorData.map((user, key) => {
                return (
                  <DoctorListRow {...user} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
