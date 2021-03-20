import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import NoMatch from "./Component/NoMatch/NoMatch";
import Login from "./Component/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Destination from "./Component/Destination/Destination";
import AvailableTransport from "./Component/AvailableTransport/AvailableTransport";

export const UserContex = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContex.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/destination">
            <Destination></Destination>
          </PrivateRoute>
          <Route path="/available">
            <AvailableTransport />
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContex.Provider>
  );
}

export default App;
