import React, { useState, useEffect } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { useStateValue } from "../../Context/StateProvider";
import { actionTypes } from "../../Context/reducer";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";

export default function PatientLogin(props) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [{ PatientUser }, dispatchUser] = useStateValue();

  const URL = "/api/patientLogin/";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    p_id: "",
    password: "",
  });

  async function uploadingData(url, data) {
    try {
      setLoading(true);
      const respones = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((e) => console.log("Error : ", e));
      const json = await respones.json();
      console.log(respones.status);
      if (respones.status === 200) {
        dispatchUser({
          type: actionTypes.SET_PATIENT,
          PatientUser: data.p_id,
        });
        navigate("/patientHome");
      }
      setLoading(false);
    } catch (e) {
      console.log("Error : ", e);
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    uploadingData(URL, formData);
  }
  useEffect(() => {
    if (PatientUser !== null) {
      navigate("/patientHome");
    }
  }, []);

  return (
    <>
      <NavBar/>
      <div className="mt-5">.</div>
      {error ? (
        <div
          className="alert alert-danger d-flex align-items-center"
          role="alert"
        >
          <svg
            className="bi flex-shrink-0 me-2"
            width="24"
            height="24"
            role="img"
            aria-label="Danger:"
          ></svg>
          <div>{errorType}</div>
        </div>
      ) : null}

      <div className="input-group w-50 border p-5 mt-5 m-auto shadow-sm p-3 mb-5 bg-body rounded">
        <form
          className="d-flex justify-content-center m-auto flex-column w-75"
          onSubmit={handleOnSubmit}
        >
          <h2 className="mb-5">Patient Login</h2>
          {isLoading ? (
            <div className="d-flex align-items-center mb-5 m-auto ">
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

          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="firstName">
                Patient ID
              </label>
              <input
                type="text"
                id="p_id"
                className="form-control"
                value={formData.p_id}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter ID"}
                minLength={4}
                maxLength={4}
                required
              />
            </div>
          </div>

          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="lastName">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter Password"}
                minLength={1}
                maxLength={10}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-dark align-self-center">
            Login
          </button>
          <div className="d-flex flex-col mt-3 justify-content-center">
            <p className="pe-2">Don't have an account?</p>
            <Link to="/patientRegister" className="text-decoration-none">
              <a className="nav-link active" aria-current="page">
                Sign Up
              </a>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
