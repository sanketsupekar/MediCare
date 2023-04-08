import React, { useEffect, useState } from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import HospitalCard from "./HospitalCard";
import { useNavigate, useParams } from "react-router-dom";

export default function HospitalSlide() {
  const navigate = useNavigate();
  const URL = "/api/hospital?search=";
  const [doctorData, setDoctorData] = useState([]);
  async function fetchingData() {
    const respones = await fetch(URL)
      .catch((e) => console.error(e));
    const json = respones ? await respones.json() : [];
    setDoctorData(json);
    console.log(doctorData);
  }

   function exploreClick()
   {
      navigate("/hospitalExplore")
   }
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 1000000,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  };

  useEffect(()=>{
    fetchingData();
  },[]);

  return (
    <section id="testimonial_hospital" className="testimonials pt-70 pb-70" style={{height:"95vh"}}>
      <div className="container mt-5">
        <div class="two alt-two ">
          <h1>
            Our Hospital's
            <span>A hospital is a good place to set various dilemmas.</span>
          </h1>
        </div>
        <div className="font-weight-bold text-center">
            <button className="btn btn-dark m-3" onClick={exploreClick}><strong> Explore </strong></button>
        </div>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme"
              {...options}
            >
              {doctorData.map((user, key) => {
                return <HospitalCard key={key} {...user} />;
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
