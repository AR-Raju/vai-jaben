import React, { useContext } from "react";
import { UserContex } from "../../App";

const AvailableTransport = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContex);
  return (
    <div>
      <h4>From {loggedInUser.from} </h4>
      <h4>To {loggedInUser.to}</h4>
    </div>
  );
};

export default AvailableTransport;
