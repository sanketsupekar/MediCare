import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

export default function DoctorListRow(props) {
  const navigate = useNavigate();
  function viewMoreClick() {
    navigate("/doctorDetails", { state: props });
   // alert("Clicked");
  }

  return (
    <>
      <div className="row">
        <div className="col-sm-3 align-self-center">
          <p className="mb-0 ">{props.d_id}</p>
        </div>
        <div className="col-sm-3 align-self-center">
          <p className="mb-0">{props.name}</p>
        </div>
        <div className="col-sm-3 align-self-center">
          <p className="mb-0">{props.speciality}</p>
        </div>
        <div className="col-sm-3 align-self-center">
          <button
            className="button"
            style={{ fontSize: "0.6rem", margin: "0" }}
            onClick={viewMoreClick}
          >
            View More
          </button>
        </div>
      </div>
      <hr />{" "}
    </>
  );
}
