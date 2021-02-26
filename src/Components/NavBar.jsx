import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import HomeView from "./view/HomeView";

const Navbar = () => {
  return (
    <Router>
      <Route exact path="/" component={HomeView}>
        Home
      </Route>
      <Link className="edit-profile__link" to={`/`}>
        Go home
      </Link>
    </Router>
  );
};

export default Navbar;
