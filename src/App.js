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
import AllPhotos from "./pages/allPhotos";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState(null);

  const signin = useCallback((uid) => {
    setUserID(uid);
    setIsLoggedIn(true);
  });
  const signout = useCallback(() => {
    setUserID(null);
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
        <Route path="/allPhotos" exact>
          <AllPhotos />
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
        <Route path="/allPhotos" exact>
          <AllPhotos />
        </Route>
        <Redirect to="./login" />
      </Switch>
    );
  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          login: signin,
          logout: signout,
          userID: userID,
        }}
      >
        <Router>
          <header>
            <Navbar />
          </header>
          <div className=""> {routes}</div>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
