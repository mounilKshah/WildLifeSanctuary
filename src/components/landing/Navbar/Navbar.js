import React, { useContext } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";

const Navbar = (props) => {
  const auth = useContext(AuthContext);
  return (
    <div className="fl w-100 pa2">
      <header class="w-100 black-80 tc pv4 avenir">
        <nav class="bt bb tc mw7 center mt4">
          <Link
            class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
            to="/"
            exact
          >
            Home
          </Link>
          <Link
            class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
            to="/map"
          >
            Map
          </Link>
          <Link
            class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
            to="/animals"
          >
            Animals
          </Link>
          {auth.isLoggedIn && (
            <Link
              class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
              to="/addPhoto"
            >
              Add Photo{" "}
            </Link>
          )}
          {!auth.isLoggedIn && (
            <Link
              class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
              to="/login"
            >
              Login{" "}
            </Link>
          )}
          {auth.isLoggedIn && (
            <Link
              class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l"
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
