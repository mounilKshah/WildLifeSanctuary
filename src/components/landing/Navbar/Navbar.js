import React, { useContext } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";

const Navbar = (props) => {
  const auth = useContext(AuthContext);
  return (
    <div className="fl w-100 pa2 bg-black flex justify-between">
      <header class="w-100 white-80 tc pv2 avenir flex justify-between">
        <h1 class="mt0 mb0 white i fw1 f1 ">Wildlife</h1>
        <h2 class="mt0 mb0 f6 fw4 ttu tracked">Your Guide to nature</h2>
        <nav class="bt bb tc mw7 center mt4 pv0 flex justify-between">
          <Link
            class="f6 f5-l link bg-animate white-80 hover-bg-light-yellow hover-black dib pa3 ph4-l"
            to="/"
            exact
          >
            Home
          </Link>
          <Link
            class="f6 f5-l link bg-animate white-80 hover-bg-light-yellow hover-black dib pa3 ph4-l"
            to="/map"
          >
            Map
          </Link>
          <Link
            class="f6 f5-l link bg-animate white-80 hover-bg-light-yellow hover-black dib pa3 ph4-l"
            to="/allPhotos"
          >
            Gallery
          </Link>
          <Link
            class="f6 f5-l link bg-animate white-80 hover-bg-light-yellow hover-black dib pa3 ph4-l"
            to="/animals"
          >
            Animals
          </Link>
          {auth.isLoggedIn && (
            <Link
              class="f6 f5-l link bg-animate white-80 hover-bg-light-yellow hover-black dib pa3 ph4-l"
              to="/addPhoto"
            >
              Add Photo{" "}
            </Link>
          )}
          {!auth.isLoggedIn && (
            <Link
              class="f6 f5-l link bg-animate white-80 hover-bg-light-yellow hover-black dib pa3 ph4-l"
              to="/login"
            >
              Login{" "}
            </Link>
          )}
          {auth.isLoggedIn && (
            <Link
              class="f6 f5-l link bg-animate white-80 hover-bg-light-yellow hover-black dib pa3 ph4-l"
              onClick={auth.logout}
            >
              Logout
            </Link>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
