import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import LoginRequired from "../LoginRequired";
import { useStateValue } from "../../Context/StateProvider";
import hospitalImage from "../../image/hospital.jpg";
import ProfileInfo from "./components/ProfileInfo";
import ProfileUpdate from "./components/ProfileUpdate";
import BackNavbar from "../BackNavbar";
import DoctorList from "./components/DoctorList";
export default function HospitalDetails() {
  const { state } = useLocation();
  const [isEdit, setEdit] = useState(false);
  const [{ HospitalUser }, dispatchHospital] = useStateValue();
  const [{ PatientUser }, dispatchPatient] = useStateValue();
  const searchHospital = "api/hospital?search=";
  const searchDoctor = "api/doctor?search=";

  const [hospitalData, setHospitalData] = useState({});
  const [doctorData, setDoctorData] = useState([]);

  async function fetchingData(searchUrl, typeOfSearch) {
    const respones = await fetch(searchUrl + state.h_id).catch((e) =>
      console.error(e)
    );
    const json = respones ? await respones.json() : [];
    if (typeOfSearch === 0) setHospitalData(json[0]);
    if (typeOfSearch === 1) setDoctorData(json);
    //console.log(json);
  }

  function bookAppointment() {
    alert("Book Appointment");
  }
  function editHospital() {
    setEdit(!isEdit);
  }

  useEffect(() => {
    // 0 -> Search Hospital
    fetchingData(searchHospital, 0);
  });

  useEffect(() => {
    // 1 -> Search Doctors
    fetchingData(searchDoctor, 1);
  });

  return (
    <>
      {state === null ? (
        <PageNotFound />
      ) : PatientUser !== null || HospitalUser !== null ? (
        <>
          <BackNavbar />
          <section style={{ backgroundColor: "#eee" }} className="mt-5">
            <div className="container py-5">
              <div className="d-flex flex-column align-items-center justify-content-center w-100">
                <div className="w-100">
                  <div className="card mb-4">
                    <div className="card-body  d-flex justify-content-center">
                      <div className="w-50">
                        <img
                          src={
                            hospitalData.profileUrl === undefined
                              ? hospitalImage
                              : hospitalData.profileUrl
                          }
                          alt="Admin"
                          style={{ width: "35rem" }}
                        ></img>
                      </div>
                      <div className=" w-50">
                        <h2 className="my-2">{hospitalData.name} Hospital</h2>
                        <p className="text-muted mb-4">
                          {hospitalData.name} Hospital is a
                          state-of-the-art medical facility located in {hospitalData.address}. With a focus on {hospitalData.speciality} care, Hospital
                          provides exceptional treatment to patients with
                          various types of {hospitalData.speciality}. The hospital has a team of
                          highly skilled and experienced oncologists, nurses,
                          and support staff who work together to provide
                          personalized care to each patient. The hospital's
                          facilities include advanced diagnostic equipment,
                          including MRI, CT scan, and PET-CT, which enable
                          accurate diagnosis of cancer and help doctors develop
                          a customized treatment plan for each patient. In
                          addition, the hospital has well-equipped operation
                          theaters and intensive care units to cater to the
                          needs of critically ill patients.
                        </p>
                      </div>

                      {/* {PatientUser !== null ? (
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
                    )} */}
                    </div>
                    {HospitalUser !== null ? (
                      <div className="d-flex justify-content-center mb-5">
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={editHospital}
                        >
                          Edit Hospital
                        </button>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <ProfileInfo {...hospitalData} />
                <DoctorList doctorData={doctorData} />

                {isEdit ? <ProfileUpdate {...hospitalData} /> : <></>}
              </div>
            </div>
          </section>{" "}
        </>
      ) : (
        <LoginRequired></LoginRequired>
      )}
    </>
  );
}
