import React, { Component } from "react";
import { Link } from "react-router-dom";
import chevronLeft from "../assets/icons/chevron-left.svg";
import "./blooms.scss";

class Blooms extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="blooms">
        <div class="animated rotateInDownLeft slower">
          <Link to="/" class="back-button ">
            <img src={chevronLeft} alt="back-button" width="20" height="20" />
          </Link>
        </div>
        <div class="content__summary animated fadeIn slower">
          <p class="content__summary-intro">
            coming soon, please check back shortly.
          </p>
        </div>
      </div>
    );
  }
}

export default Blooms;
