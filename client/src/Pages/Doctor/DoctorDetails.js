import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import LoginRequired from "../LoginRequired";
import { useStateValue } from "../../Context/StateProvider";
import ProfileInfo from "./components/ProfileInfo";
import ProfileUpdate from "./components/ProfileUpdate";

export default function DoctorDetails() {
  const { state } = useLocation();
  const [isEdit, setEdit] = useState(false);
  const [{ HospitalUser }, dispatchHospital] = useStateValue();
  const [{ PatientUser }, dispatchPatient] = useStateValue();
  const [{ DoctorUser }, dispatchDoctor] = useStateValue();
  const searchUrl = "api/doctor?search=";

  const [doctorData, setDoctorData] = useState({
    _id: null,
    d_id: "",
    h_id: "",
    hospitalName: "",
    name: "",
    speciality: "",
    mail: "",
    phoneNo: "",
    address: "",
    password: "",
    experience: "",
    charges: "",
    qualification: "",
    profileUrl:"",
  });

  async function fetchingData() {
    const respones = await fetch(searchUrl + state.d_id).catch((e) =>
      console.error(e)
    );
    const json = respones ? await respones.json() : [];
    setDoctorData(json[0]);

  }

  function bookAppointment() {
    alert("Book Appointment");
  }
  function editDoctor() {
    setEdit(!isEdit);
  }

  useEffect(() => {
    fetchingData();
  });

  return (
    <>
      {PatientUser !== null || HospitalUser !== null || DoctorUser !== null ? (
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container py-5">
            <div className="d-flex flex-column align-items-center justify-content-center w-100">
              <div className="w-100">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img
                      src={doctorData.profileUrl === undefined ? "https://bootdey.com/img/Content/avatar/avatar7.png" : doctorData.profileUrl}
                      alt="avatar"
                      className="rounded-circle img-fluid"
                      style={{ width: "150px" }}
                    />
                    <h5 className="my-2">Dr. {doctorData.name}</h5>
                    <p className="text-muted mb-4">
                      {doctorData.speciality} Specialist
                    </p>

                    {PatientUser !== null ? (
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
                    )}

                    <div className="d-flex justify-content-center mb-2">
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={editDoctor}
                      >
                        Edit Doctor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <ProfileInfo {...doctorData} />
              {isEdit ? <ProfileUpdate {...doctorData} /> : <></>}
            </div>
          </div>
        </section>
      ) : (
        <LoginRequired></LoginRequired>
      )}
    </>
  );
}
