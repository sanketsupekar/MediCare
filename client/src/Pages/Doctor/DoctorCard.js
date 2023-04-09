import React from "react";
import DoctorDetails from "./DoctorDetails";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const DoctorCard = (props) => {
  const navigate = useNavigate();
  function viewMoreClick() {
    navigate('/doctorDetails', { state: props });
  }

  return (
    <div
      className="item mx-3 mb-5"
      style={{
        width: "25rem",
      }}
    >
      <div class="main-body">
        <div class="d-flex flex-column justify-content-center text-dark">
          <div className="card swiper-slide">
            <div className="image-content">
              <span className="overlay"></span>

              <div className="card-image">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt=""
                  className="card-img"
                />
              </div>
            </div>

            <div className="card-content">
              <h1 className="name">Dr. {props.name}</h1>
              <h1 className="specialist">{props.speciality} Specialist</h1>
              <p className="description">
                Doctor {props.name} works at {props.hospitalName} hospital and
                specializes in {props.speciality} related medical issues. He/She
                has {props.experience} years of experience and holds a
                qualification of {props.qualification}.
              </p>

              <button className="button" onClick={viewMoreClick}>
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
