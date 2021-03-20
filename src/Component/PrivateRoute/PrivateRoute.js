import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContex } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContex);
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
