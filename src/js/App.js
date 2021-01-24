import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Footer from "./Footer";
import Brand from "./Brand";
import HomeScraper from "./HomeScraper";
import WelcomePage from "./WelcomePage";
import Manage_Product from "./secured/Products";

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light pl-5">
        <Brand size={5} />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/scrape">
                <span className="text-muted text-secondary">Scrape</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Fragment>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/scrape">
            <HomeScraper />
          </Route>
          <Route path="/catalog">
            <Manage_Product/>
          </Route>
        </Fragment>
      </Switch>
      <Footer />
    </Router>
  );
}

function About() {
  return (
    <div className="container mt-5">
      <h2>About</h2>
    </div>
  );
}
