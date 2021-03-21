import "./Home.css";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import bgImg from "../../images/background.png";
import bike from "../../images/Frame.png";
import car from "../../images/Frame-2.png";
import bus from "../../images/Frame-1.png";
import train from "../../images/Group.png";
import Transport from "../Transport/Transport";
import { Col, Container, Row } from "react-bootstrap";
// import fakeData from "../../fakeData/fakeData.json";

const Home = () => {
  const style = {
    display: "flex",
    margin: "10px",
    justifyContent: "space-around",
    paddingTop: "100px",
  };

  const transport = [
    {
      id: 1,
      name: "Bike",
      Img: bike,
      space: 2,
      rent: 30,
    },
    {
      id: 2,
      name: "Car",
      Img: car,
      space: 4,
      rent: 80,
    },
    {
      id: 3,
      name: "Bus",
      Img: bus,
      space: 5,
      rent: 20,
    },
    {
      id: 4,
      name: "Train",
      Img: train,
      space: 60,
      rent: 100,
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100vh",
        width: "100vw",
        overflow: "scroll",
      }}
    >
      <Header></Header>

      <Container>
        <Row>
          {transport.map((tp) => (
            <Col className="d-flex justify-content-arround mt-5">
              <Transport key={tp.id} transport={tp}></Transport>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
