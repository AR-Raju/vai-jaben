import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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
          <Link className="mr-2" to="/home">
            Home
          </Link>
          <Link className="mr-2" to="/destination">
            Destination
          </Link>
          <Link className="mr-2" to="/home">
            Blog
          </Link>
          <Link className="mr-2" to="/home">
            Contact
          </Link>
          {loggedInUser.email ? (
            <Link className="mr-2" to="/destination">
              {loggedInUser.email}
            </Link>
          ) : (
            <Link
              className="mr-2"
              to="/login"
              className="text-white bg-warning px-2"
            >
              Login
            </Link>
          )}
          <Link
            className="mr-2"
            to="/login"
            className="text-white bg-warning px-2"
            onClick={() => setLoggedInUser({})}
          >
            Logout
          </Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;
