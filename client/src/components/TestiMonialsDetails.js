import React from "react";

const TestiMonialsDetails = (props) => {
  return (
    <div className="item">
      <div class="main-body">
        <div class="d-flex flex-column justify-content-center text-dark">
          <div class="m-3 w-100">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    class="rounded-circle"
                    style={{width : 100}}
                  ></img>
                  <div class="mt-3">
                    <h5>{props.firstName} {props.lastName}</h5>
                  </div>
                </div>
                <div className="d-flex my-3 h-100">
                <div className="d-flex flex-column justify-content-around mx-5 w-100">
                  <div className="d-flex border-top border-bottom p-2">
                    <label className="fw-bold mx-2"> Patient ID : </label>
                    <label>{props.p_id}</label>
                  </div>
                  <div className="d-flex border-top border-bottom p-2">
                    <label className="fw-bold  mx-2"> First Name :</label>
                    <label>{props.firstName}</label>
                  </div>
                  <div className="d-flex border-top border-bottom p-2">
                    <label className="fw-bold  mx-2"> Last Name :</label>
                    <label>{props.lastName}</label>
                  </div>
                  <div className="d-flex border-top border-bottom p-2 flex-wrap">
                    <label className="fw-bold  mx-2"> Age :</label>
                    <label>{props.age}</label>
                  </div>

                  <div className="d-flex border-top border-bottom p-2">
                    <label className="fw-bold mx-2"> Phone No : </label>
                    <label>{props.phoneNo}</label>
                  </div>
                  <div className="d-flex border-top border-bottom p-2">
                    <label className="fw-bold  mx-2"> Address :</label>
                    <label>{props.address}</label>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestiMonialsDetails;
