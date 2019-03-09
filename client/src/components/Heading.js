import React, { Component } from "react";
import BFR from "../bfr.jpg";
import "../App.css";

export default class Heading extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
          <a className="navbar-brand" href="#">
            SpaceX
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                Launches<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Rockets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Capsules
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <section id="showcase">
          <div class="carousel-inner">
            <div class="carousel-item carousel-image-1 active" />

            {/* 
        </div> */}
          </div>
        </section>
      </div>
    );
  }
}
