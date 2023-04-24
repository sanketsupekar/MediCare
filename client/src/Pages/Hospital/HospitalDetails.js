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
 
  async function fetchingData(searchUrl,typeOfSearch) {
    const respones = await fetch(searchUrl + state.h_id).catch((e) =>
      console.error(e)
    );
    const json = respones ? await respones.json() : [];
    if(typeOfSearch === 0)setHospitalData(json[0]);
    if(typeOfSearch === 1) setDoctorData(json);
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
    fetchingData(searchHospital,0);
  });

  useEffect(() => {
    // 1 -> Search Doctors
    fetchingData(searchDoctor,1);
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
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Eaque eveniet eius dolorem sint assumenda,
                          dignissimos magni dicta velit numquam excepturi nobis
                          provident vitae facere totam ea et ab deleniti!
                          Incidunt? Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Perspiciatis fugiat minima
                          praesentium provident at quaerat architecto adipisci
                          rerum reiciendis? Incidunt maiores explicabo eaque
                          dolor sequi, saepe facilis error numquam dolorem?
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ducimus, similique minus saepe distinctio,
                          facilis excepturi, mollitia quos dicta vero et iure
                          adipisci quod itaque ipsum esse praesentium iusto
                          impedit temporibus! Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Minima voluptas iusto
                          praesentium voluptatem? Asperiores quo rem aperiam
                          voluptatibus eaque magnam itaque, rerum doloremque
                          earum, vel eum excepturi corrupti officiis et!
                          mollitia quos dicta vero et iure adipisci quod itaque
                          ipsum esse praesentium iusto impedit temporibus!
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
                <DoctorList doctorData = {doctorData} />
                
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
