import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import riot_logo from "./assets/riot_logo.png";
import galio_portrait from "./assets/galio_portrait.png";
import jayce_portrait from "./assets/jayce_portrait.png";
import jinx_portrait from "./assets/jinx_portrait.png";
import kaisa_portrait from "./assets/kaisa_portrait.png";
import silco_portrait from "./assets/silco_portrait.png";
import tahm_kench_portrait from "./assets/tahm_kench_portrait.png";
import veigar_portrait from "./assets/veigar_portrait.png";
import viktor_portrait from "./assets/viktor_portrait.png";
import zeri_portrait from "./assets/zeri_portrait.png";
import ToggleButton from "react-bootstrap/ToggleButton";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function App() {
  const [radioValue, setRadioValue] = useState("1");
  const [gold, setGold] = useState(50);
  const [unitCount, setUnitCount] = useState({
    oneCost: 0,
    twoCost: 0,
    threeCost: 0,
    fourCost: 0,
    fiveCost: 0,
  });
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
  };

  const subtractGold = () => {
    const numericGold = Number(gold);
    if (numericGold > 0) {
      setGold(numericGold - 1);
    }
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
            <span id="logo-text">TFTREROLL</span>
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
          <Col lg={7}>
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
                  <button
                    className="gold-button"
                    onClick={() => subtractGold()}
                  >
                    -
                  </button>
                  <input
                    className="gold-number"
                    value={gold}
                    onChange={(e) => validateGold(e)}
                  ></input>
                  <button className="gold-button" onClick={() => addGold()}>
                    +
                  </button>
                </div>
              </Col>
            </Row>
            <Tabs defaultActiveKey="simple" id="uncontrolled-tab-example">
              <Tab eventKey="simple" title="Simple"> 
                hello
              </Tab>
              <Tab eventKey="champion" title="Champion Select">
                <Row className="champ-select">
                  <Col>
                    <h4>SELECT UNIT(S)</h4>
                    <Accordion alwaysOpen>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>5- Cost Units</Accordion.Header>
                        <Accordion.Body>
                          <Row>
                            <Col xs={6} sm={3}>
                              <div>
                                <Card style={{ width: "100%" }}>
                                  <Card.Img
                                    variant="top"
                                    src={galio_portrait}
                                    style={{ aspectRatio: "3/2" }}
                                  />
                                  <Card.Body>
                                    <Card.Title>Galio</Card.Title>
                                    <Button variant="primary">Go</Button>
                                  </Card.Body>
                                </Card>
                              </div>
                              <div>
                                <Card style={{ width: "100%" }}>
                                  <Card.Img
                                    variant="top"
                                    src={silco_portrait}
                                    style={{ aspectRatio: "3/2" }}
                                  />
                                  <Card.Body>
                                    <Card.Title>Silco</Card.Title>
                                    <Button variant="primary">Go</Button>
                                  </Card.Body>
                                </Card>
                              </div>
                              <div>
                                <Card style={{ width: "100%" }}>
                                  <Card.Img
                                    variant="top"
                                    src={zeri_portrait}
                                    style={{ aspectRatio: "3/2" }}
                                  />
                                  <Card.Body>
                                    <Card.Title>Zeri</Card.Title>
                                    <Button variant="primary">Go</Button>
                                  </Card.Body>
                                </Card>
                              </div>
                            </Col>
                            <Col xs={6} sm={3}>
                              <div>
                                <Card style={{ width: "100%" }}>
                                  <Card.Img
                                    variant="top"
                                    src={jayce_portrait}
                                    style={{ aspectRatio: "3/2" }}
                                  />
                                  <Card.Body>
                                    <Card.Title>Jayce</Card.Title>
                                    <Button variant="primary">Go</Button>
                                  </Card.Body>
                                </Card>
                              </div>
                              <div>
                                <Card style={{ width: "100%" }}>
                                  <Card.Img
                                    variant="top"
                                    src={tahm_kench_portrait}
                                    style={{ aspectRatio: "3/2" }}
                                  />
                                  <Card.Body>
                                    <Card.Title>Tahm Kench</Card.Title>
                                    <Button variant="primary">Go</Button>
                                  </Card.Body>
                                </Card>
                              </div>
                            </Col>
                            <Col xs={6} sm={3}>
                              <div>
                                <Card style={{ width: "100%" }}>
                                  <Card.Img
                                    variant="top"
                                    src={jinx_portrait}
                                    style={{ aspectRatio: "3/2" }}
                                  />
                                  <Card.Body>
                                    <Card.Title>Jinx</Card.Title>
                                    <Button variant="primary">Go</Button>
                                  </Card.Body>
                                </Card>
                              </div>
                              <div>
                                <Card style={{ width: "100%" }}>
                                  <Card.Img
                                    variant="top"
                                    src={veigar_portrait}
                                    style={{ aspectRatio: "3/2" }}
                                  />
                                  <Card.Body>
                                    <Card.Title>Veigar</Card.Title>
                                    <Button variant="primary">Go</Button>
                                  </Card.Body>
                                </Card>
                              </div>
                            </Col>
                            <Col xs={6} sm={3}>
                              <div>
                                <Card style={{ width: "100%" }}>
                                  <Card.Img
                                    variant="top"
                                    src={kaisa_portrait}
                                    style={{ aspectRatio: "3/2" }}
                                  />
                                  <Card.Body>
                                    <Card.Title>Kai'Sa</Card.Title>
                                    <Button variant="primary">Go</Button>
                                  </Card.Body>
                                </Card>
                              </div>
                              <div>
                                <Card style={{ width: "100%" }}>
                                  <Card.Img
                                    variant="top"
                                    src={viktor_portrait}
                                    style={{ aspectRatio: "3/2" }}
                                  />
                                  <Card.Body>
                                    <Card.Title>Viktor</Card.Title>
                                    <Button variant="primary">Go</Button>
                                  </Card.Body>
                                </Card>
                              </div>
                            </Col>
                          </Row>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>4-Cost Units</Accordion.Header>
                        <Accordion.Body></Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>3-Cost Units</Accordion.Header>
                        <Accordion.Body></Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>2-Cost Units</Accordion.Header>
                        <Accordion.Body></Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>1-Cost Units</Accordion.Header>
                        <Accordion.Body></Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Col>
          <Col lg={5}>
            <h4>REROLL STATISTICS</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
