import React, { useState, useEffect } from "react";
import headerbg from "../../image/header_img.jpg";
import { useStateValue } from "../../Context/StateProvider";

export default function PatientHeader() {
  const [{ HospitalUser }, dispatchUser] = useStateValue();
  const searchUrl = "api/hospital?search=";
  const [hospitalUser, setHospitalData] = useState({
    _id: null,
    h_id: "",
    name: "",
    speciality: "",
    mail: "",
    phoneNo: "",
    address: "",
    password: "",
  });
  async function fetchingData() {
    const respones = await fetch(searchUrl + HospitalUser).catch((e) =>
      console.error(e)
    );
    const json = respones ? await respones.json() : [];
    setHospitalData(json[0]);
    console.log(json);
  }

  useEffect(() => {
    fetchingData();
  }, []); // eslint-disable-line

  return (
    <>
      <div
        className="card text-center text-light shadow p-3 "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${headerbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height:"90vh",
          backgroundColor: "black",
        }}
      >
        <div className=" header-wrapper w-75  m-auto my-5 py-5">
          <div className="">Welcome</div>
          <div className="card-body">
            <h1 className="card-title fw-bolder">Hey, {hospitalUser.name}</h1>
            {/* <p className="card-text fw-lighter ">
              <span className="fw-bolder ">
                This is a simple phone directory web application which supports
                : Create, Update, Delete And Search Contact in phone Directory
                with responsive user interface.
              </span>
            </p> */}
          </div>
          <div class="main-body">
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
                        <h4>{hospitalUser.name}</h4>
                        <h4>Hospital</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="m-3 w-50">
                <div class="card">
                  <div className="d-flex my-3 h-100">
                    <div className="d-flex flex-column justify-content-around mx-5 w-100">
                      <div className="d-flex border-top border-bottom p-2">
                        <label className="fw-bold mx-2"> Hospital ID : </label>
                        <label>{hospitalUser.h_id}</label>
                      </div>
                      <div className="d-flex border-top border-bottom p-2">
                        <label className="fw-bold  mx-2">
                          {" "}
                          Hospital Name :
                        </label>
                        <label>{hospitalUser.name}</label>
                      </div>
                      <div className="d-flex border-top border-bottom p-2">
                        <label className="fw-bold  mx-2"> Speciality :</label>
                        <label>{hospitalUser.speciality}</label>
                      </div>
                      <div className="d-flex border-top border-bottom p-2 flex-wrap">
                        <label className="fw-bold  mx-2"> Mail :</label>
                        <label>{hospitalUser.mail}</label>
                      </div>

                      <div className="d-flex border-top border-bottom p-2">
                        <label className="fw-bold mx-2"> Phone No : </label>
                        <label>{hospitalUser.phoneNo}</label>
                      </div>
                      <div className="d-flex border-top border-bottom p-2">
                        <label className="fw-bold  mx-2"> Address :</label>
                        <label>{hospitalUser.address}</label>
                      </div>
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
