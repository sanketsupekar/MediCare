import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PageNotFound from "../PageNotFound";
import LoginRequired from "../LoginRequired";
import { useStateValue } from "../../Context/StateProvider";
import ProfileUpdate from "./components/ProfileUpdate";
import ProfileInfo from "./components/ProfileInfo";

export default function PatientDetails() {
  const [isEdit,setEdit] = useState(false);
  const [ {PatientUser} , dispatchUser] = useStateValue();

  const searchUrl = "api/patient?search=";
  const [patientUser, setPatientData] = useState({
    _id: null,
    p_id: "",
    firstName: "",
    lastName: "",
    age: "",
    phoneNo: "",
    address: "",
    password: "",
  });

  async function fetchingData() {
    const respones = await fetch(searchUrl + PatientUser).catch((e) =>
      console.error(e)
    );
    const json = respones ? await respones.json() : [];
    setPatientData(json);
    console.log(json);
  }

  function editPatient() {
    setEdit(! isEdit)
  }
  useEffect(()=>{
    fetchingData();
  });

  return (
    <>
    {
     PatientUser !== null ? 
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
                  <div className="d-flex justify-content-center mb-2">
                    <button
                      type="button"
                      className="btn btn-dark"
                      onClick={editPatient}
                    >
                      {isEdit ? "Profile Information" : "Edit Profile"}
                    </button>
                  </div>
            
            <ProfileInfo {...patientUser}/>
            {
              isEdit ? <ProfileUpdate {...patientUser}/> : <></>
            }
        </div>
      </section> : <LoginRequired/> 
}
    </>
  );
}
