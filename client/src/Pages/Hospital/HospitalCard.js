import React from "react";
import hospitalImage from "../../image/hospital.jpg";
import { useNavigate, useParams, useLocation } from "react-router-dom";
export default function HospitalCard(props) {
  const navigate = useNavigate();
  function viewMoreClick() {
    navigate("/hospitalDetails", { state: props });
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
            <div className="image-content" style={{ height: "15rem" }}>
              <img
                className="overlay"
                src={
                  props.profileUrl === undefined
                    ? hospitalImage
                    : props.profileUrl
                }
              />
              {/* <span className="overlay"></span> */}
            </div>

            <div className="card-content">
              <h1 className="name">{props.name} Hospital</h1>
              <h1 className="specialist">{props.speciality} Specialist</h1>
              <p className="description">
                {props.name} Hospital is an {props.speciality} specialty
                hospital located in {props.address}, India. Hospital may be able
                to provide the care you require.
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
}
