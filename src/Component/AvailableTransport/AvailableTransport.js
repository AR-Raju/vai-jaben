import "./AvailableTransport.css";
import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContex } from "../../App";
import Header from "../Header/Header";
// import bike from "../../images/Frame.png";
// import car from "../../images/Frame-2.png";
// import bus from "../../images/Frame-1.png";
// import train from "../../images/Group.png";
// import Transport from "../Transport/Transport";
import map from "../../images/Map.png";
// import { useParams } from "react-router";

const AvailableTransport = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContex);
  // const transport = [
  //   {
  //     id: 1,
  //     name: "Bike",
  //     Img: bike,
  //     space: 2,
  //     rent: 30,
  //   },
  //   {
  //     id: 2,
  //     name: "Car",
  //     Img: car,
  //     space: 4,
  //     rent: 80,
  //   },
  //   {
  //     id: 3,
  //     name: "Bus",
  //     Img: bus,
  //     space: 5,
  //     rent: 20,
  //   },
  //   {
  //     id: 4,
  //     name: "Train",
  //     Img: train,
  //     space: 60,
  //     rent: 100,
  //   },
  // ];

  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={6} sm={12}>
            <div className="box1">
              <div className="box2">
                <h4>Journey Date - {loggedInUser.date}</h4>
                <h4>From {loggedInUser.from} </h4>
                <h4>To {loggedInUser.to}</h4>
              </div>
              <div className="box3">{}</div>
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <img style={{ width: "auto" }} src={map} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AvailableTransport;
