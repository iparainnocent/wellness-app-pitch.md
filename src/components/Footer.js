import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  // State for modals
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // Handlers for modals
  const handleClosePrivacy = () => setShowPrivacy(false);
  const handleShowPrivacy = () => setShowPrivacy(true);

  const handleCloseTerms = () => setShowTerms(false);
  const handleShowTerms = () => setShowTerms(true);

  const handleCloseContact = () => setShowContact(false);
  const handleShowContact = () => setShowContact(true);

  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <Container>
        <Row>
          <Col xs={12} lg={6} className="p-3">
            <h5 className="mb-4">Follow Us</h5>
            <div className="d-flex justify-content-center">
              <a href="#!" className="mx-2" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#!" className="mx-2" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="#!" className="mx-2" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </Col>
          <Col xs={12} lg={6} className="p-3">
            <h5 className="mb-4">Links</h5>
            <Button
              variant="link"
              className="d-block mb-2"
              onClick={handleShowPrivacy}
            >
              Privacy Policy
            </Button>
            <Button
              variant="link"
              className="d-block mb-2"
              onClick={handleShowTerms}
            >
              Terms of Service
            </Button>
            <Button
              variant="link"
              className="d-block"
              onClick={handleShowContact}
            >
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Privacy Policy Modal */}
      <Modal show={showPrivacy} onHide={handleClosePrivacy}>
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Your privacy is important to us.</h6>
          <p>
            This privacy policy explains how we collect, use, and protect your
            information.
          </p>
          <h6>Information We Collect</h6>
          <ul>
            <li>Personal Information: Name, email address, etc.</li>
            <li>Usage Data: Information on how you use our website.</li>
          </ul>
          <h6>How We Use Your Information</h6>
          <p>
            We use your information to improve our services, communicate with
            you, and comply with legal obligations.
          </p>
          <h6>Cookies</h6>
          <p>
            We use cookies to enhance your experience on our site. You can
            choose to accept or decline cookies.
          </p>
          <h6>Changes to This Policy</h6>
          <p>
            We may update this policy from time to time. We will notify you of
            any changes by posting the new policy on this page.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePrivacy}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal show={showTerms} onHide={handleCloseTerms}>
        <Modal.Header closeButton>
          <Modal.Title>Terms of Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Terms of Service</h6>
          <p>These terms govern your use of our website and services.</p>
          <h6>Acceptance of Terms</h6>
          <p>By using our services, you agree to comply with these terms.</p>
          <h6>Changes to Terms</h6>
          <p>
            We may update these terms periodically, and your continued use of
            our services constitutes acceptance of the new terms.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTerms}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Contact Us Modal */}
      <Modal show={showContact} onHide={handleCloseContact}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Ready to begin your wellness journey? Reach out to us today!</h6>
          <p>
            Email:{" "}
            <a href="mailto:contact@havenwellness.com">
              contact@havenwellness.com
            </a>
          </p>
          <p>Phone: (254) 456-7890</p>
          <p>Address: 123 Wellness Lane, Health City</p>
          <p>We look forward to welcoming you to Haven Wellness Center.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseContact}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};

export default Footer;
