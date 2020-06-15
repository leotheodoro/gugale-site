import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <AboutUs />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}
