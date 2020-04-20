import React, { useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Animals from "./pages/animals";
import Landing from "./pages/landing";
import Map from "./pages/map";
import Auth from "./pages/auth";
import Login from "./pages/login";
import { AuthContext } from "./context/authContext";
import NewPhoto from "./pages/newPhoto";
import Navbar from "./components/landing/Navbar/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signin = useCallback(() => {
    setIsLoggedIn(true);
  });
  const signout = useCallback(() => {
    setIsLoggedIn(false);
  });

  let routes;
  if (isLoggedIn)
    routes = (
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/animals" exac>
          <Animals />
        </Route>
        <Route path="/map" exact>
          <Map />
        </Route>
        <Route path="/addPhoto" exact>
          <NewPhoto />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  else
    routes = (
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/animals" exact>
          <Animals />
        </Route>
        <Route path="/map" exact>
          <Map />
        </Route>

        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Redirect to="./login" />
      </Switch>
    );
  return (
    <div className="App">
      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: signin, logout: signout }}
      >
        <Router>
          <Navbar />
          {routes}
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
