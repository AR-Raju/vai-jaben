import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContex } from "../../App";

const Transport = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContex);
  const [click, setClick] = useState("");
  const { name, Img, id } = props.transport;
  const handleClick = () => {
    const newInfo = { ...click };
    newInfo.id = `${id}`;
    newInfo.Img = `${Img}`;
    setClick(newInfo);
    setLoggedInUser(newInfo);
    console.log(loggedInUser);
  };
  return (
    <div>
      <Link to={`/destination/${id}`}>
        <Card onClick={handleClick} style={{ width: "15rem" }}>
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
