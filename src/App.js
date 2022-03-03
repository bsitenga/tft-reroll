import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import riot_logo from "./assets/riot_logo.png";
import ToggleButton from "react-bootstrap/ToggleButton";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [akaliCheck, setAkaliCheck] = useState(false);
  const [fiveCostCount, setFiveCostCount] = useState(0);
  const [checked, setChecked] = useState(false);

  const clickFiveCost = (a) => {
    console.log(a);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={riot_logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <span id="logo-text">TFT REROLL</span>
          </Navbar.Brand>
          <Nav className="me-auto" id="nav-links">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/updates">Updates</Nav.Link>
            <Nav.Link href="/support">Support</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container style= {{paddingTop: "10px"}}>
        <Row className="main-body">
          <Col lg>
            <Row className="intro-select">
              <Col><h4>SELECT LEVEL</h4></Col>
              <Col><h4>GOLD</h4></Col>
            </Row>
            <Row className="champ-select">
              <Col><h4>SELECT CHAMPION(S)</h4></Col>
            </Row>
          </Col>
          <Col lg><h4>REROLL STATISTICS</h4></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
