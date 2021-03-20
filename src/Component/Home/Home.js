import "./Home.css";
import React from "react";
import Header from "../Header/Header";
import bgImg from "../../images/background.png";
import bike from "../../images/Frame.png";
import car from "../../images/Frame-2.png";
import bus from "../../images/Frame-1.png";
import train from "../../images/Group.png";
import Transport from "../Transport/Transport";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const style = {
    display: "flex",
    margin: "40px",
    justifyContent: "space-around",
    paddingTop: "100px",
  };

  const transport = [
    {
      name: "Bike",
      Img: bike,
      space: 2,
      rent: 30,
    },
    {
      name: "Car",
      Img: car,
      space: 4,
      rent: 80,
    },
    {
      name: "Bus",
      Img: bus,
      space: 5,
      rent: 20,
    },
    {
      name: "Train",
      Img: train,
      space: 60,
      rent: 100,
    },
  ];

  const handleClick = (e) => {
    console.log(e.target.value);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Header></Header>
      <div style={style}>
        {transport.map((tp) => (
          <Transport
            onClick={handleClick}
            key={tp.name}
            transport={tp}
          ></Transport>
        ))}
      </div>
    </div>
  );
};

export default Home;
