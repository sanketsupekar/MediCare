import React from "react";
import headerbg from "../../image/header_img.jpg";
import { useStateValue } from "../../Context/StateProvider";

export default function PatientHeader() {
  const [{ HospitalUser }, dispatchUser] = useStateValue();
  return (
    <>
      <div
        className="card text-center text-light shadow p-3 "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${headerbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundColor: "black",
        }}
      >
        <div className=" header-wrapper w-50 m-auto my-5 py-5">
          <div className="card-header">Welcome</div>
          <div className="card-body">
            <h1 className="card-title fw-bolder">Hey, {HospitalUser}</h1>
            {/* <p className="card-text fw-lighter ">
              <span className="fw-bolder ">
                This is a simple phone directory web application which supports
                : Create, Update, Delete And Search Contact in phone Directory
                with responsive user interface.
              </span>
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}
