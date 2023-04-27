import React, { useEffect, useState } from "react";
import BackNavbar from "../BackNavbar";
import { useStateValue } from "../../Context/StateProvider";
import DoctorList from "./components/DoctorList";

export default function HospitalDeleteDoctor(props) {
  const [{ HospitalUser }, dispatchHospital] = useStateValue();
  const [doctorData, setDoctorData] = useState([]);
  const searchDoctor = "api/doctor?search=";
  async function fetchingData(searchUrl) {
    const respones = await fetch(searchUrl+HospitalUser).catch((e) => console.error(e));
    const json = respones ? await respones.json() : [];
    setDoctorData(json);
  }

  useEffect(()=>{
    fetchingData(searchDoctor);
  })
  return (
    <>
      <BackNavbar />
      <div className="container" style={{marginTop:"5rem"}}>
         <DoctorList doctorData={doctorData} />
      </div>
     
    </>
  );
}
