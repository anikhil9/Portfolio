import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export const ContactDetails = () => {
  return (
    <section className="contact-details">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2>Reach Out to Me!</h2>
            <p>Discuss a Project or just want to say Hi? My inbox is open for all.</p>
            <div className="contact-details-container">
              <div className="contact-details-item">
                <FontAwesomeIcon icon={faUser} />
                <div className="contact-detail-text">
                  <strong>Name</strong>
                  <p>Nikhil Alla</p>
                </div>
              </div>
              <div className="contact-details-item">
                <FontAwesomeIcon icon={faPhone} />
                <div className="contact-detail-text">
                  <strong>Phone</strong>
                  <p>+1 656-215-5455</p>
                </div>
              </div>
              <div className="contact-details-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <div className="contact-detail-text">
                  <strong>Email</strong>
                  <p>alla.nikhil.257@gmail.com</p>
                </div>
              </div>
              <div className="contact-details-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <div className="contact-detail-text">
                  <strong>Location</strong>
                  <p>Tampa,FL</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
};
