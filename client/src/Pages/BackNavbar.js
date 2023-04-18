import React from "react";
import "bootstrap/js/src/collapse.js";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faBackward,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import "../App";

export default function BackNavbar() {
  const navigate = useNavigate();
  function backClick() {
    navigate(-1);
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
            <a className="navbar-brand" href="#">
              Medicare
            </a>
          </div>

          <div
            className="collapse navbar-collapse w-50"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav w-100 d-flex justify-content-end me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={backClick}
                >
                  <FontAwesomeIcon icon={faBackward} className="mx-3" />
                  BACK
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
