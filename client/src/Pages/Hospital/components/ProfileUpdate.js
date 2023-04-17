import React, { useEffect, useState } from "react";

export default function ProfileUpdate(props) {
  const URL = "/api/hospitalUpdate/";
  const IMG_URL = "/api/hospitalProfileUpdate";
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorType, setErrorType] = useState("");
  const [image, setImage] = useState("");

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const [hospitalData, setHospitalData] = useState({
    _id: null,
    h_id: "",
    name: "",
    speciality: "",
    mail: "",
    phoneNo: "",
    address: "",
    profileUrl: "",
  });

  const handleImageUpload = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("h_id", props.h_id);
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
    console.log(hospitalData);
    updateData(URL, hospitalData);
    handleImageUpload();
  }
  useEffect(() => {
    setHospitalData(props);
    // console.log(props);
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
        <div className="w-100">
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3 align-self-center">
                  <p className="mb-0">Hospital Profile</p>
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
                <div className="col-sm-3">
                  <p className="mb-0">Hospital ID</p>
                </div>
                <div className="col-sm-9">
                  <input
                    type="text"
                    id="h_id"
                    className="form-control"
                    value={hospitalData.h_id}
                    onChange={(e) =>
                      setHospitalData({
                        ...hospitalData,
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
                <div className="col-sm-3">
                  <p className="mb-0">Hospital Name</p>
                </div>
                <div className="col-sm-9">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={hospitalData.name}
                    onChange={(e) =>
                      setHospitalData({
                        ...hospitalData,
                        [e.target.id]: e.target.value,
                      })
                    }
                    placeholder={"Enter Name"}
                    minLength={1}
                    maxLength={10}
                    required
                  />
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Speciality</p>
                </div>
                <div className="col-sm-9">
                  <input
                    type="text"
                    id="speciality"
                    className="form-control"
                    value={hospitalData.speciality}
                    onChange={(e) =>
                      setHospitalData({
                        ...hospitalData,
                        [e.target.id]: e.target.value,
                      })
                    }
                    placeholder={"Enter Speciality"}
                    minLength={1}
                    maxLength={10}
                    required
                  />
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Mail</p>
                </div>
                <div className="col-sm-9">
                  <input
                    type="text"
                    id="mail"
                    className="form-control"
                    value={hospitalData.mail}
                    onChange={(e) =>
                      setHospitalData({
                        ...hospitalData,
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
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Phone No.</p>
                </div>
                <div className="col-sm-9">
                  <input
                    type="text"
                    id="phoneNo"
                    className="form-control"
                    value={hospitalData.phoneNo}
                    onChange={(e) =>
                      setHospitalData({
                        ...hospitalData,
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
                <div className="col-sm-3">
                  <p className="mb-0">Address</p>
                </div>
                <div className="col-sm-9">
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    value={hospitalData.address}
                    onChange={(e) =>
                      setHospitalData({
                        ...hospitalData,
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
              <hr />
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
