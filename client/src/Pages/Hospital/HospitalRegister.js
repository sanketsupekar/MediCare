import React, { useState, useEffect } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";

export default function PatientRegister(props) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");
  const URL = "/api/hospitalReg/";
  const URL_H_ID = "/api/hospitalId";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    _id: null,
    h_id: "",
    name: "",
    speciality: "",
    mail: "",
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
        setErrorType(json.messmail);
        setError(true);
        setTimeout(() => {
          setError(false);
          console.log(json);
        }, 1500);
      } else if (respones.status == 200) {
        console.log(json);
        navigate("/hospitalLogin");
      }
    } catch (e) {
      console.log("Error : ", e);
    }
  }

  async function getNextHospitalId() {
    const response = await fetch(URL_H_ID).catch((e) => {
      console.log(e);
    });
    const data = await response.json();
    setFormData({ ...formData, h_id: data.hospital_id });
  }
  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(formData);
    uploadingData(URL, formData);
  }

  useEffect(() => {
    getNextHospitalId();
  }, []);

  return (
    <>
      <NavBar />
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
          <h2 className="mb-5">Hospital Register</h2>
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
              <label className="form-label" htmlFor="name">
                Hospital ID
              </label>
              <input
                type="text"
                id="h_id"
                className="form-control"
                value={formData.h_id}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter ID"}
                minLength={4}
                maxLength={4}
                required
                readonly="readonly"
              />
            </div>
          </div>

          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="name">
                Hospital Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter Name"}
                minLength={1}
                maxLength={25}
                required
              />
            </div>
          </div>
          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="speciality">
                Speciality
              </label>
              <input
                type="text"
                id="speciality"
                className="form-control"
                value={formData.speciality}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter Speciality"}
                minLength={1}
                maxLength={20}
                required
              />
            </div>
          </div>

          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="speciality">
                Mail
              </label>
              <input
                type="text"
                id="mail"
                className="form-control"
                value={formData.mail}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.id]: e.target.value })
                }
                placeholder={"Enter mail"}
                minLength={1}
                maxLength={20}
                required
              />
            </div>
          </div>

          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="speciality">
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
              <label className="form-label" htmlFor="speciality">
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
                maxLength={30}
                required
              />
            </div>
          </div>

          <div className="d-flex flex-row mb-4">
            <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="speciality">
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
            <Link to="/hospitalLogin" className="text-decoration-none">
              <a className="nav-link active" aria-current="pmail">
                Sign In
              </a>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
