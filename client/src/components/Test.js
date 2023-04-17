import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageNotFound from "../Pages/PageNotFound";
import LoginRequired from "../Pages/LoginRequired";
export default function Test() {
  const [image,setImage] = useState("");
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleImageUpload = () => {
    const formData = new FormData();
    formData.append('image', image);

    fetch('/uploadImage', {
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


  return (
    <>
      <div className="main-body w-100">
        <div className="d-flex justify-content-center text-dark">
          <div className="m-3 w-25">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={image}
                    alt="Admin"
                    className="rounded-circle"
                    width="150"
                  ></img>
                  <div className="mt-3">
                    <h4>{"Sans"}</h4>
                    <h4>{"Cutii"}</h4>
                  </div>
                  <div className="mb-3">
                    <label for="formFile" className="form-label">
                      Default file input example
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                     onChange={handleImageChange}
                    ></input>
                    <button type="button" className="btn btn-dark mt-5 " onClick={handleImageUpload} >Update Profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
