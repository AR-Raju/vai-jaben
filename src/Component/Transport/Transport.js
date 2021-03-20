import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContex } from "../../App";

const Transport = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContex);
  const { name, Img } = props.transport;

  return (
    <div>
      <Link to="/destination">
        <Card style={{ width: "18rem" }}>
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
