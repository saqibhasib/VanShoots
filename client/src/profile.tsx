import React from "react";
import "./profile.css";
import { Col, Row, Button, Container } from "react-bootstrap";
function profile() {
  return (
    <div className="profile">
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default profile;
