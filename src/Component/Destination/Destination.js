import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContex } from "../../App";
import Header from "../Header/Header";

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
  };
  return (
    <div>
      <Header></Header>
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
          <br />
          <Link to="/available">
            <button className="bg-danger">submit</button>
          </Link>
        </form>
      )}
    </div>
  );
};

export default Destination;
