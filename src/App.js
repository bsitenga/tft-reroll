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
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

function App() {
  const [radioValue, setRadioValue] = useState("1");
  const [gold, setGold] = useState(50);
  const [akaliCheck, setAkaliCheck] = useState(false);
  const [fiveCostCount, setFiveCostCount] = useState(0);
  const [checked, setChecked] = useState(false);

  const radios = [
    { name: "1", value: "1" },
    { name: "2", value: "2" },
    { name: "3", value: "3" },
    { name: "4", value: "4" },
    { name: "5", value: "5" },
    { name: "6", value: "6" },
    { name: "7", value: "7" },
    { name: "8", value: "8" },
    { name: "9", value: "9" },
    { name: "10", value: "10" },
  ];

  const validateGold = (e) => {
    if (e.target.value.indexOf(" ") === -1) {
      let userInput = Number(e.target.value);
      if (Number.isInteger(userInput) && userInput < 100) {
        setGold(Number(e.target.value));
      }
    }
  };

  const addGold = () => {
    const numericGold = Number(gold);
    if (numericGold < 99) {
      setGold(numericGold + 1);
    }
  }

  const subtractGold = () => {
    const numericGold = Number(gold);
    if (numericGold > 0) {
      setGold(numericGold - 1);
    }
  }

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
      <Container style={{ paddingTop: "10px" }}>
        <Row className="main-body">
          <Col lg>
            <Row className="intro-select">
              <Col xs sm={9} xxl={7}>
                <h4>SELECT LEVEL</h4>
                <ButtonGroup className="mb-2">
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio-${idx}`}
                      type="radio"
                      variant="outline-danger"
                      name="radio"
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </Col>
              <Col xs sm={3} xxl={5}>
                <h4>GOLD</h4>
                <div className="gold-counter">
                  <button className="gold-button" onClick={() => subtractGold()}>-</button>
                  <input
                    className="gold-number"
                    value={gold}
                    onChange={(e) => validateGold(e)}
                  ></input>
                  <button className="gold-button" onClick={() => addGold()}>+</button>
                </div>
              </Col>
            </Row>
            <Row className="champ-select">
              <Col>
                <h4>SELECT CHAMPION(S)</h4>
              </Col>
            </Row>
          </Col>
          <Col lg>
            <h4>REROLL STATISTICS</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
