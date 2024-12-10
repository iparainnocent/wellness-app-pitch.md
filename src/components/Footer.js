import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <Container>
        <Row>
          <Col lg={6} className="p-3">
            <h5 className="mb-4">Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a href="#!" className="mx-2">
                Facebook
              </a>
              <a href="#!" className="mx-2">
                Instagram
              </a>
              <a href="#!" className="mx-2">
                Twitter
              </a>
            </div>
          </Col>
          <Col lg={6} className="p-3">
            <h5 className="mb-4">Links</h5>
            <a href="#!" className="d-block mb-2">
              Privacy Policy
            </a>
            <a href="#!" className="d-block mb-2">
              Terms of Service
            </a>
            <a href="#!" className="d-block">
              Contact Us
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
