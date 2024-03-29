import React, { useEffect, useState } from "react";
import { useStateValue } from "../../../Context/StateProvider";
import { useNavigate, useParams } from "react-router-dom";

export default function ProfileUpdate(props) {
  const URL = "/api/patientUpdate/";
  const IMG_URL = "/api/patientProfileUpdate";
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [image, setImage] = useState("");

  const [topping, setTopping] = useState("Medium");

  const onOptionChange = (e) => {
    setTopping(e.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const [formData, setFormData] = useState({
    _id: null,
    p_id: "",
    firstName: "",
    lastName: "",
    age: "",
    phoneNo: "",
    address: "",
    password: "",
    profileUrl: "",
    gender: "",
    height: "",
    weight: "",
    bloodGroup: "",
  });

  const handleImageUpload = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("p_id", props.p_id);
    fetch(IMG_URL, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  async function updateData(URL, data) {
    try {
      setLoading(true);
      const respones = await fetch(URL, {
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
      } else if (respones.status == 200) {
        console.log("Done");
      }
    } catch (e) {
      console.log("Error : ", e);
    }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(formData);
    updateData(URL, formData);
    handleImageUpload();
  }
  useEffect(() => {
    setFormData(props);
  }, []);
  return (
    <>
      <div className="d-flex justify-content-around w-100">
        <div className="w-100">
          <div className="card m-3">
            <div className="card-body">
              {isLoading ? (
                <div className="d-flex align-items-center mb-5 m-auto ">
                  {/* <strong>Loading...</strong> */}
                  <div
                    className="spinner-border ms-auto"
                    role="status"
                    aria-hidden="true"
                  ></div>
                </div>
              ) : (
                <div></div>
              )}

              <div className="d-flex justify-content-around w-100">
                <div className="d-flex justify-content-around w-100">
                  <div className="w-100">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-3 align-self-center">
                            <p className="mb-0">Patient Profile</p>
                          </div>
                          <div className="col-sm-9">
                            <input
                              className="form-control"
                              type="file"
                              id="profileUrl"
                              onChange={handleImageChange}
                            ></input>
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col-sm-3 align-self-center">
                            <p className="mb-0">Patient ID</p>
                          </div>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              id="p_id"
                              className="form-control"
                              value={formData.p_id}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  [e.target.id]: e.target.value,
                                })
                              }
                              placeholder={"Enter ID"}
                              minLength={4}
                              maxLength={4}
                              required
                              readonly="readonly"
                            />
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col-sm-3 align-self-center">
                            <p className="mb-0">First Name</p>
                          </div>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              id="firstName"
                              className="form-control"
                              value={formData.firstName}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  [e.target.id]: e.target.value,
                                })
                              }
                              placeholder={"Enter First Name"}
                              minLength={1}
                              maxLength={10}
                              required
                            />
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col-sm-3 align-self-center">
                            <p className="mb-0">Last Name</p>
                          </div>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              id="lastName"
                              className="form-control"
                              value={formData.lastName}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  [e.target.id]: e.target.value,
                                })
                              }
                              placeholder={"Enter Last Name"}
                              minLength={1}
                              maxLength={10}
                              required
                            />
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col-sm-3 align-self-center">
                            <p className="mb-0">Age</p>
                          </div>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              id="age"
                              className="form-control"
                              value={formData.age}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  [e.target.id]: e.target.value,
                                })
                              }
                              placeholder={"Enter Age"}
                              minLength={1}
                              maxLength={2}
                              required
                            />
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col-sm-3 align-self-center">
                            <p className="mb-0">Phone No.</p>
                          </div>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              id="phoneNo"
                              className="form-control"
                              value={formData.phoneNo}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  [e.target.id]: e.target.value,
                                })
                              }
                              placeholder={"Enter Phone No"}
                              minLength={1}
                              maxLength={10}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-100">
                    <div className="card h-100">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-3 align-self-center">
                            <p className="mb-0">Address</p>
                          </div>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              id="address"
                              className="form-control"
                              value={formData.address}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  [e.target.id]: e.target.value,
                                })
                              }
                              placeholder={"Enter Address"}
                              minLength={1}
                              maxLength={10}
                              required
                            />
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col-sm-3 align-self-center">
                            <p className="mb-0">Gender</p>
                          </div>
                          <div className="col-sm-9 d-flex flex-column">
                            <div className="my-2">
                              <input
                                className="form-check-input me-2"
                                type="radio"
                                name="gender"
                                value="Male"
                                id="gender"
                                checked={formData.gender === "Male"}
                                // onChange={onOptionChange}

                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    [e.target.id]: e.target.value,
                                  })
                                }
                              />
                              <label htmlFor="male">Male</label>
                            </div>

                            <div className="my-2">
                              <input
                                className="form-check-input me-2"
                                type="radio"
                                name="gender"
                                value="Female"
                                id="gender"
                                checked={formData.gender === "Female"}
                                // onChange={onOptionChange}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    [e.target.id]: e.target.value,
                                  })
                                }
                              />
                              <label htmlFor="female ">Female</label>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col-sm-3 align-self-center">
                            <p className="mb-0">Height</p>
                          </div>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              id="height"
                              className="form-control"
                              value={formData.height}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  [e.target.id]: e.target.value,
                                })
                              }
                              placeholder={"Enter Height In cm"}
                              minLength={1}
                              maxLength={3}
                              required
                            />
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col-sm-3 align-self-center">
                            <p className="mb-0">Weight</p>
                          </div>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              id="weight"
                              className="form-control"
                              value={formData.weight}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  [e.target.id]: e.target.value,
                                })
                              }
                              placeholder={"Enter Weight In kg"}
                              minLength={1}
                              maxLength={2}
                              required
                            />
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col-sm-3 align-self-center">
                            <p className="mb-0">Blood Group</p>
                          </div>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              id="bloodGroup"
                              className="form-control"
                              value={formData.bloodGroup}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  [e.target.id]: e.target.value,
                                })
                              }
                              placeholder={"Enter Blood Group"}
                              minLength={1}
                              maxLength={2}
                              required
                            />
                          </div>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-around w-100">
                <button
                  type="submit"
                  className="btn btn-dark align-self-center my-4"
                  onClick={handleOnSubmit}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
