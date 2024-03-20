import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div
        className="newsletter-bx wow slideInUp"
        style={{ backgroundColor: "#0c1c42", color: "white" }}
      >
        <Row>
          <h3>
            Let's create something amazing together! I'm always open to new
            collaborations and partnerships. Feel free to reach out, and let's
            turn ideas into reality!
          </h3>
        </Row>
      </div>
    </Col>
  );
};
