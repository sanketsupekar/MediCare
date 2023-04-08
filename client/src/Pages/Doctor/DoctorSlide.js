import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import DoctorCard from "../Doctor/DoctorCard";
import { useNavigate, useParams } from "react-router-dom";

export default function DoctorSlide() {
  const URL = "/api/doctor?search=";
  const [doctorData, setDoctorData] = useState([]);
  const navigate = useNavigate();

  async function fetchingData() {
    const respones = await fetch(URL)
      .catch((e) => console.error(e));
    const json = respones ? await respones.json() : [];
    setDoctorData(json);
    console.log(doctorData);
  }

  const userData = [
    {
        d_id: "D101",
        h_id: "H101",
        name: "Sanket",
        speciality: "Brain",
        mail: "sanket@gmail.com",
        phoneNo: 9130420859,
        address: "Pune",
        password: "sans",
        experience: "50",
        charges: 5000,
        qualification: "B.Tech",
    },
  ];
   function exploreClick()
   {
      navigate("/doctorExplore");
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
    <section id="testimonial_doctor" className="testimonials pt-70 pb-70" style={{height:"95vh"}}>
      <div className="container mt-5">
        <div class="two alt-two ">
          <h1>
            Our Doctor's
            <span>The best doctors give the least medicine.</span>
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
                return <DoctorCard key={key} {...user} />;
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
