import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContex } from "../../App";
import Header from "../Header/Header";
import map from "../../images/Map.png";

const Destination = (e) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContex);
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    if (e.target.name === "from") {
      loggedInUser.from = e.target.value;
    }
    if (e.target.name === "to") {
      loggedInUser.to = e.target.value;
    }
    if (e.target.name === "date") {
      loggedInUser.date = e.target.value;
    }
  };
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={4} sm={12}>
            {loggedInUser && (
              <form>
                <h6>From</h6>
                <input
                  type="text"
                  name="from"
                  onInput={handleInput}
                  id=""
                  placeholder="from where"
                />
                <h6>To</h6>
                <input
                  type="text"
                  name="to"
                  onInput={handleInput}
                  id=""
                  placeholder="to where"
                />
                <h6>Date</h6>
                <input
                  type="date"
                  name="date"
                  onInput={handleInput}
                  id=""
                  placeholder="to where"
                />
                <br />
                <br />
                <Link to="/available">
                  <button className="bg-info">submit</button>
                </Link>
              </form>
            )}
          </Col>
          <Col lg={8} sm={12}>
            <img style={{ width: "auto" }} src={map} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Destination;
