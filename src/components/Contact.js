import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>

                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <button className="new-email-bx">Email me</button>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <button className="new-email-bx">View my github</button>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <button className="new-email-bx">
                        Reach out on Linkedin
                      </button>
                    </Col>
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
