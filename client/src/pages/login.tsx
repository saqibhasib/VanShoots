import React, { useState } from "react";
import "./login.css";
import Axios from "axios";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { constants } from "os";
import { useHistory } from "react-router";
import Logo from '../assets/logo2.png';

function Login() {
  const history = useHistory(); 
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const getInfo = () => {
    // axios response
    const response = Axios.post("localhost:5003/api/login", {
      email: emailReg,
      password: passwordReg,
    })
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => {
        // console.log(err);
        // alert("Error in getting information");
        return err;
      });
    return response;
  };

  const sendInfo = () => {
    history.push("/home");
    getInfo().then((response) => {
      console.log(response);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("accessToken", response.data.accessToken);
    }).catch(err => {window.location.reload();});
  };

  return (
    <div className="login">
      <div className="col d-flex justify-content-center mt-5">
        <img src={Logo} alt="logo" width="auto" height="70" />
      </div>
      <Container className="form-container">
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  id="email"
                  onChange={(e) => {
                    setEmailReg(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => {
                    setPasswordReg(e.target.value);
                  }}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={sendInfo}>
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
