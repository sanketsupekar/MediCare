import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faBackward,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer(props) {
  return (
    <>
      <div className="">
        <footer
          className="text-center text-lg-start bg-dark"
          //   style={{ backgroundColor: "#db6930" }}
        >
          <div className="container d-flex justify-content-center py-5">
            <button
              type="button"
              className="btn btn-light btn-lg btn-floating mx-2"
              style={{ backgroundColor: "white" }}
            >
              <FontAwesomeIcon icon={faFacebook} className="mx-3" />
            </button>
            <button
              type="button"
              className="btn btn-light btn-lg btn-floating mx-2"
              style={{ backgroundColor: "white" }}
            >
              <FontAwesomeIcon icon={faInstagram} className="mx-3" />
            </button>
            <button
              type="button"
              className="btn btn-light btn-lg btn-floating mx-2"
              style={{ backgroundColor: "white" }}
            >
              <FontAwesomeIcon icon={faLinkedin} className="mx-3" />
            </button>
            <button
              type="button"
              className="btn btn-light btn-lg btn-floating mx-2"
              style={{ backgroundColor: "white" }}
            >
              <FontAwesomeIcon icon={faGithub} className="mx-3" />
            </button>
          </div>

          <div
            className="text-center text-white p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright :
            <a className="text-white" href="https://mdbootstrap.com/">
              Sanket And Sanskruti
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
