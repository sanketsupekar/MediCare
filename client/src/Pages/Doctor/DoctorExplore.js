import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DoctorCard from "./DoctorCard";
import DoctorNavbar from "./DoctorNavbar";
import { useStateValue } from "../../Context/StateProvider";

export default function DoctorExplore() {
  const [inputText, setInputText] = useState("");
  const [userData, setUserData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [{ PatientUser }, dispatchPatient] = useStateValue();
  const [{ HospitalUser }, dispatchHospital] = useStateValue();

  const searchUrl = "api/doctor?search=";
  const navigate = useNavigate();

  async function fetchingData() {
    setLoading(true);
    const respones = await fetch(searchUrl + inputText)
      .catch((e) => console.error(e))
      .finally(() => {
        setLoading(false);
      });
    const json = respones ? await respones.json() : [];
    setUserData(json);
    console.log(userData);
    console.log(userData.length);
    setLoading(false);
    setInputText("");
  }
  function handleOnSearch(e) {
    e.preventDefault();
    //alert(inputText);
    fetchingData();
  }
  function handleSearchText(e) {
    setInputText(e.target.value);
  }

  useEffect(() => {
    fetchingData();
  }, []); // eslint-disable-line

  useEffect(()=>{
    if(PatientUser === null && HospitalUser === null)
    {
      navigate("/home");
    }
},[]);

  return (
    <>

    <div id="doctorExplore">
      <div  className="input-group border w-50 p-5 mt-5 m-auto shadow-sm p-3 mb-5 bg-body rounded">
        <form className="w-100" onSubmit={handleOnSearch}>
          <div className=" search-box-wrapper d-flex flex-wrap justify-content-around w-100">
            <input
              type="search"
              id="searchText"
              value={inputText}
              onChange={handleSearchText}
              className=" form-control w-50"
              placeholder="Search Name"
            />

            <button
              type="submit"
              className="btn btn-dark rounded"
              // onClick={handleOnSearch}
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="my-5">
        {userData.length === 0 && !isLoading ? (
          <div className="d-flex align-items-center text-center m-auto w-25">
            <p className="w-100">No Data Found..!</p>
          </div>
        ) : (
          <div></div>
        )}

        {isLoading ? (
          <div className="d-flex align-items-center m-auto w-25">
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
      </div>
      { (
          
      <div className="d-flex flex-wrap justify-content-around ">
        {userData.map((user, key) => {
          return (
            <DoctorCard key={key} {...user}/>
          );
        })}
      </div>
      )}
      </div>
    </>
  );
}
