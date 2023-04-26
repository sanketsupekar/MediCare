import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTeletype, faMailForward } from "@fortawesome/free-solid-svg-icons";

export default function AboutUs() {
  return (
    <div id="aboutUsPage" className="two alt-two mb-5 border">
      <Container className="align-items-center mb-5">
        <Row className="mb-5 ">
          <Col lg="16">
            <div className="container mt-5 ml-5 ">
              <div className="two alt-two text-center">
                <h1>
                  About Us
                  <span>Here our Insights !.</span>
                </h1>
              </div>
            </div>
            <br />
            <br />
          </Col>
        </Row>

        <div class="main-body d-flex justify-content-center">
          <div class="d-flex justify-content-center text-dark border  w-75 ">
            <div class="m-3">
              <p>
                &emsp;&emsp;&emsp; In publishing and graphic design, Lorem ipsum
                is a placeholder text commonly used to demonstrate the visual
                form of a document or a typeface without relying on meaningful
                content. Lorem ipsum may be used as a placeholder before final
                copy is available. In publishing and graphic design, Lorem ipsum
                is a placeholder text commonly used to demonstrate the visual
                form of a document or a typeface without relying on meaningful
                content. Lorem ipsum may be used as a placeholder before final
                copy is available. In publishing and graphic design, Lorem ipsum
                is a placeholder text commonly used to demonstrate the visual
                form of a document or a typeface without relying on meaningful
                content. Lorem ipsum may be used as a placeholder before final
                copy is available.
              </p>
            </div>

            <div class="m-3">
              <img
                src={
                  "https://docs.niyogin.com/wp-content/uploads/2021/11/about_us_story_vector.png"
                }
                alt="Admin"
                // class="rounded-circle"
                style={{ width: "20rem" }}
              ></img>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
