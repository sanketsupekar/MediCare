import React, { useEffect, useState } from "react";

const URL = "/api/doctorUpdate/";
const IMG_URL = "/api/doctorProfileUpdate";

export default function ProfileUpdate(props) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [image, setImage] = useState("");


  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const [doctorData, setDoctorData] = useState({
    _id: null,
    d_id: "",
    name: "",
    speciality: "",
    mail: "",
    phoneNo: "",
    address: "",
    experience: "",
    charges: "",
    qualification: "",
    profileUrl:"",
  });

  const handleImageUpload = () => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('d_id',props.d_id);
    fetch(IMG_URL, {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(result => {
        console.log(result);
      })
      .catch(error => {
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
    console.log(doctorData);
    updateData(URL, doctorData);
    handleImageUpload();
  }
  useEffect(() => {
    setDoctorData(props);
  }, []);
  return (
    <>
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
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3 align-self-center">
                    <p className="mb-0">Doctor Profile</p>
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
                <hr />
                <div className="row">
                  <div className="col-sm-3 align-self-center">
                    <p className="mb-0">Doctor ID</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      id="d_id"
                      className="form-control"
                      value={doctorData.d_id}
                      onChange={(e) =>
                        setDoctorData({
                          ...doctorData,
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
                <hr />
                <div className="row">
                  <div className="col-sm-3 align-self-center">
                    <p className="mb-0">Doctor Name</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      value={doctorData.name}
                      onChange={(e) =>
                        setDoctorData({
                          ...doctorData,
                          [e.target.id]: e.target.value,
                        })
                      }
                      placeholder={"Enter Name"}
                      minLength={1}
                      maxLength={25}
                      required
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3 align-self-center">
                    <p className="mb-0">Speciality</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      id="speciality"
                      className="form-control"
                      value={doctorData.speciality}
                      onChange={(e) =>
                        setDoctorData({
                          ...doctorData,
                          [e.target.id]: e.target.value,
                        })
                      }
                      placeholder={"Enter Speciality"}
                      minLength={1}
                      maxLength={15}
                      required
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3 align-self-center">
                    <p className="mb-0">Mail</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      id="mail"
                      className="form-control"
                      value={doctorData.mail}
                      onChange={(e) =>
                        setDoctorData({
                          ...doctorData,
                          [e.target.id]: e.target.value,
                        })
                      }
                      placeholder={"Enter mail"}
                      minLength={1}
                      maxLength={20}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3 align-self-center">
                    <p className="mb-0">Phone No.</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      id="phoneNo"
                      className="form-control"
                      value={doctorData.phoneNo}
                      onChange={(e) =>
                        setDoctorData({
                          ...doctorData,
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
                <hr />
                <div className="row">
                  <div className="col-sm-3 align-self-center">
                    <p className="mb-0">Experince</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="Number"
                      id="experience"
                      className="form-control"
                      value={doctorData.experience}
                      onChange={(e) =>
                        setDoctorData({
                          ...doctorData,
                          [e.target.id]: e.target.value,
                        })
                      }
                      placeholder={"Enter Experience"}
                      minLength={1}
                      maxLength={2}
                      required
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3 align-self-center">
                    <p className="mb-0">Charges</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="Number"
                      id="charges"
                      className="form-control"
                      value={doctorData.charges}
                      onChange={(e) =>
                        setDoctorData({
                          ...doctorData,
                          [e.target.id]: e.target.value,
                        })
                      }
                      placeholder={"Enter Charges"}
                      minLength={1}
                      maxLength={5}
                      required
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3 align-self-center">
                    <p className="mb-0">Qualification</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      id="qualification"
                      className="form-control"
                      value={doctorData.qualification}
                      onChange={(e) =>
                        setDoctorData({
                          ...doctorData,
                          [e.target.id]: e.target.value,
                        })
                      }
                      placeholder={"Enter Qualification"}
                      minLength={1}
                      maxLength={10}
                      required
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3 align-self-center">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      id="address"
                      className="form-control"
                      value={doctorData.address}
                      onChange={(e) =>
                        setDoctorData({
                          ...doctorData,
                          [e.target.id]: e.target.value,
                        })
                      }
                      placeholder={"Enter Address"}
                      minLength={1}
                      maxLength={100}
                      required
                    />
                  </div>
                </div>
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
    </>
  );
}
