import React from "react";
import { Link } from "react-router-dom";
function LoginRequired() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 perspective">
      <h1 className="text-center mb-4 font-weight-bold">
        <span className="d-inline-block position-relative">
          <span className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">404</span>
        </span>
      </h1>
      <div className="cloak__wrapper position-fixed top-0 left-0 bottom-0 right-0 overflow-hidden">
        <div className="cloak__container position-absolute top-50 start-50 translate-middle" style={{ height: "250vmax", width: "250vmax" }}>
          <div className="cloak"></div>
        </div>
      </div>
      <div className="info text-center">
        <h2>Authetication Error</h2>
        <p>Login Required</p>
        <Link to="/home" className="text-decoration-none">
        <a className="btn btn-dark text-uppercase bg-hsl button-color-hsl text-white rounded-pill px-4 py-2">Home</a>
        </Link>
      </div>
    </div>
  );
}

export default LoginRequired;