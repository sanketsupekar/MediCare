import React, { useEffect } from "react";
import "bootstrap/js/src/collapse.js";
import logo from "../../image/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import '../../App';

export default function PatientNavbar() {
  const navigate = useNavigate();
  function logoutUser()
  {
      window.localStorage.clear();
      window.location.reload();
  }
  function userProfile()
  {
      navigate("/patientDetails");
  }
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark text-light bg-dark fixed-top shadow mb-5">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse w-50"
            id="navbarTogglerDemo03"
          >
            <a className="navbar-brand">
              <img src={logo} alt="" width="30" height="24"></img>
            </a>
            <a className="navbar-brand">
              Medicare
            </a>
          </div>

          <div
            className="collapse navbar-collapse w-50"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav w-100 d-flex justify-content-end me-auto mb-2 mb-lg-0">
  
              <li className="nav-item mx-2">
                <Link to="/home" className="text-decoration-none">
                  <a className="nav-link active" aria-current="page">
                    HOME
                  </a>
                </Link>
              </li>
              <li className="nav-item mx-2">
               
                  <a className="nav-link active" aria-current="page" onClick={userProfile}>
                    PROFILE
                  </a>
               
              </li>
              <li className="nav-item mx-2">
                <Link className="text-decoration-none">
                  <a className="nav-link active" aria-current="page" onClick={logoutUser}>
                    LOGOUT
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
