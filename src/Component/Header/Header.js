import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { UserContex } from "../../App";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContex);
  return (
    <Container>
      <Navbar>
        <Navbar.Brand
          href="/home"
          className="text-white font-weight-bold bg-warning px-3"
        >
          Vai Jaben
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/destination">Destination</Nav.Link>
          <Nav.Link href="">Blog</Nav.Link>
          <Nav.Link href="">Contact</Nav.Link>
          {loggedInUser.email ? (
            <Nav.Link href="/destination">{loggedInUser.email}</Nav.Link>
          ) : (
            <Nav.Link href="/login" className="text-white bg-warning px-2">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;
