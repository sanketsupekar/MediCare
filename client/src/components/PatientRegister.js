import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function PatientRegister(props) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");
  const URL = "/api/patientReg/";

  const [formData, setFormData] = useState({
    _id: null,
    p_id: "",
    firstName: "",
    lastName: "",
    age: "",
    phoneNo: "",
    address: "",
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
      setLoading(false);
      if (respones.status !== 200) {
        setErrorType(json.message);
        setError(true);
        setTimeout(() => {
          setError(false);
          console.log(json);
        }, 1500);
      }
      else{
        //Navigate
      }
    } catch (e) {
      console.log("Error : ", e);
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(formData);
    uploadingData(URL, formData);
  }

  return (
    <>
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
          <h2 className="mb-5">Patient Register</h2>
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
              <label className="form-label" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter First Name"}
                minLength={1}
                maxLength={10}
                required
              />
            </div>
          </div>
          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter Last Name"}
                minLength={1}
                maxLength={10}
                required
              />
            </div>
          </div>

          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="lastName">
                Age
              </label>
              <input
                type="text"
                id="age"
                className="form-control"
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter Age"}
                minLength={1}
                maxLength={2}
                required
              />
            </div>
          </div>

          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="lastName">
                Phone No.
              </label>
              <input
                type="text"
                id="phoneNo"
                className="form-control"
                value={formData.phoneNo}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter Phone No"}
                minLength={1}
                maxLength={10}
                required
              />
            </div>
          </div>

          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="lastName">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="form-control"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter Address"}
                minLength={1}
                maxLength={10}
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
            Register
          </button>
          <div className="d-flex flex-col mt-3 justify-content-center">
            <p className="pe-2">Already have an account?</p>
            <Link to="/patientLogin" className="text-decoration-none">
              <a className="nav-link active" aria-current="page">
                Sign In
              </a>
            </Link>
          </div>

        </form>
      </div>
    </>
  );
}
