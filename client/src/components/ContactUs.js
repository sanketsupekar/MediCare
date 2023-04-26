import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTeletype, faMailForward } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  return (
    <div className="two alt-two mb-5" style={{ height: "80vh" }}>
      <Container className="align-items-center">
        <Row className="mb-5 ">
          <Col lg="16">
            <div className="container mt-5 ml-5 ">
              <div className="two alt-two text-center">
                <h1>
                  Contact Us
                  <span>We are eager to contact you.</span>
                </h1>
              </div>
            </div>
            <br />
            <br />
          </Col>
        </Row>
        <Row className="sec_sp container">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Be with Us</h3>
            <address>
              <FontAwesomeIcon icon={faMailForward} className="mx-3" />
              <strong className="ri-mail-send-line">Email : </strong>
              medicare@gmail.com
              <br />
              <br />
              <p>
                <FontAwesomeIcon icon={faTeletype} className="mx-3" />
                <strong>Phone : </strong>0253 - 2467189
              </p>
            </address>

            <p>
              Your worries our care! Please give us your valuable feedback and
              querries if any.
            </p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </Col>

                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </Col>
              </Row>
              <br />

              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn btn-dark" type="submit">
                    Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
