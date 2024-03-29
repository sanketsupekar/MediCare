import React, { useEffect, useState } from "react";

import headerbg from "../image/header_img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";

import {

  faUser,
  faHospital,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
export default function Header(props) {
  const navigate = useNavigate();
  function doctorClick()
  {
        console.log("Doctor Click");
        navigate("/doctorLogin");
  }
  function patientClick()
  {
        console.log("Patient Click");
        navigate("/patientLogin");
  }
  function hospitalClick()
  {
        console.log("Hospital Click");
        navigate("/hospitalLogin");
  }


  return (
    <>
      <header className="masthead">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 py-5">
              <h1 className="mb-4">
                MediCare
              </h1>
              <h2 className="m-0">
                Care for Million !
              </h2>
            </div>
            <div className="col-lg-5">
              <div className="py-5 px-4 masthead-cards">
               
                <div className="d-flex justify-content-center">
                  <a href="#" className="pr-3 pb-4" onClick={patientClick}>
                    <div className="card border-0 border-bottom-red shadow-lg shadow-hover">
                      <div className="card-body text-center" style={{width:"8rem"}}>
                      <div className="text-center">
                        
                            <FontAwesomeIcon
                              icon={faUser}
                              className="mx-3"
                              style={{fontSize:"1.5rem"}}
                            />
                     
                        </div>
                        Patient
                      </div>
                    </div>
                  </a>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="#" className="pr-3 pb-4" onClick={doctorClick} >
                    <div className="card border-0 border-bottom-red shadow-lg shadow-hover">
                      <div className="card-body text-center" style={{width:"8rem"}}>
                      <div className="text-center">
                        
                            <FontAwesomeIcon
                              icon={faUserDoctor}
                              className="mx-3"
                              style={{fontSize:"1.5rem"}}
                            />
                          
                        </div>
                        Doctor
                      </div>
                    </div>
                  </a>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="#" className="pr-3 pb-4" onClick={hospitalClick}>
                    <div className="card border-0 border-bottom-red shadow-lg shadow-hover">
                      <div className="card-body text-center"style={{width:"8rem"}} >
                      <div className="text-center">
                       
                            <FontAwesomeIcon
                              icon={faHospital}
                              className="mx-3"
                              style={{fontSize:"1.5rem"}}

                            />
                       
                        </div>
                        Hospital
                      </div>
                    </div>
                  </a>
                </div>
                
                
                <div className="shape"></div>
              </div>
            </div>
          </div>
        </div>
        <svg
          style={{ pointerEvents: "none" }}
          className="wave"
          width="100%"
          height="50px"
        >
          <defs>
            <clipPath id="a">
              <rect className="a" width="1920" height="75"></rect>
            </clipPath>
          </defs>
          <title>wave</title>
          <g className="b">
            <path
              className="c"
              d="M1963,327H-105V65A2647.49,2647.49,0,0,1,431,19c217.7,3.5,239.6,30.8,470,36,297.3,6.7,367.5-36.2,642-28a2511.41,2511.41,0,0,1,420,48"
            ></path>
          </g>
          <g className="b">
            <path
              className="d"
              d="M-127,404H1963V44c-140.1-28-343.3-46.7-566,22-75.5,23.3-118.5,45.9-162,64-48.6,20.2-404.7,128-784,0C355.2,97.7,341.6,78.3,235,50,86.6,10.6-41.8,6.9-127,10"
            ></path>
          </g>
          <g className="b">
            <path
              className="d"
              d="M1979,462-155,446V106C251.8,20.2,576.6,15.9,805,30c167.4,10.3,322.3,32.9,680,56,207,13.4,378,20.3,494,24"
            ></path>
          </g>
          <g className="b">
            <path
              className="d"
              d="M1998,484H-243V100c445.8,26.8,794.2-4.1,1035-39,141-20.4,231.1-40.1,378-45,349.6-11.6,636.7,73.8,828,150"
            ></path>
          </g>
        </svg>
      </header>
    </>
    
  );
}
