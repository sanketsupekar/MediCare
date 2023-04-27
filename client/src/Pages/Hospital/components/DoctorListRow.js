import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

export default function DoctorListRow(props) {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const deleteUrl = "/api/deleteDoctor";
  function viewMoreClick() {
    navigate("/doctorDetails", { state: props });
    // alert("Clicked");
  }

  async function deletingData(d_id) {
    try {
      setLoading(true);
      await fetch(deleteUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({d_id : d_id}),
      });
    } catch (e) {
      console.log("Error deleting contacts " + e);
    } finally {
      setLoading(false);
    }
  }

  function deleteClick() {
    deletingData(props.d_id);
    // alert("Clicked");
  }
  return (
    <>
      {isLoading ? (
        <div className="d-flex align-items-center mb-5 m-auto ">
          <strong>Loading...</strong>
          <div
            className="spinner-border ms-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="row">
        <div className="col-sm-3 align-self-center">
          <p className="mb-0 ">{props.d_id}</p>
        </div>
        <div className="col-sm-2 align-self-center">
          <p className="mb-0">{props.name}</p>
        </div>
        <div className="col-sm-2 align-self-center">
          <p className="mb-0">{props.speciality}</p>
        </div>
        <div className="col-sm-2 align-self-center">
          <button
            className="button"
            // style={{ fontSize: "0.6rem", margin: "0" }}
            onClick={viewMoreClick}
          >
            View More
          </button>
        </div>
        <div className="col-sm-2 align-self-center">
          <button
            className="btn btn-danger"
            // style={{ fontSize: "0.6rem", margin: "0" }}
            onClick={deleteClick}
          >
            Delete
          </button>
        </div>
      </div>
      <hr />{" "}
    </>
  );
}
