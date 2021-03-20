import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContex } from "../../App";

const Transport = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContex);
  const [click, setClick] = useState("");
  const { name, Img } = props.transport;
  console.log(click);
  return (
    <div>
      <Link to="/destination">
        <Card
          onClick={(e) => setClick(e.target.value)}
          style={{ width: "15rem" }}
        >
          <Card.Img variant="top" src={Img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default Transport;
