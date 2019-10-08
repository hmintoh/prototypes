import React, { Component } from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import logo from "../assets/images/prototype_asphalt_bold.png";
import bloomsLink from "../assets/images/blooms.png";
import coffeeLink from "../assets/images/coffee.png";
import "./home.scss";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section id="home">
        <div id="particles-js">
          <Particles
            params={{
              particles: {
                number: { value: 30 },
                size: { value: 2 },
                move: { speed: 1 },
                color: { value: "#a66454" },
                line_linked: { color: "#a66454" }
              }
            }}
          />
        </div>

        <div className="homeGrid__container">
          <div className="homeGrid__logo">
            <img
              src={logo}
              alt="prototype"
              className="logo animated fadeIn slower delay-1s"
            />
          </div>

          <div className="homeGrid__summary animated fadeIn slower delay-2s">
            <p>
              To prototype is to materialise an idea, no matter how primitive
              the result might seem. That very act takes us on a path of
              continual refinement of what it could be. With Prototype, we want
              to embrace abstract possibilities in a spirit of fearless enquiry.
            </p>
            <p>
              The community revitalises us. What you see today is the result of
              our shared journey; to elevate an existing experience and recreate
              a memory so it runs deeper than before. After all, what is the
              beauty of creating if it cannot be known and shared with?
            </p>
            <p>
              So we welcome you to Prototype - where ideas that have been
              brewing can finally bloom in full.
            </p>

            <div className="homeGrid__links animated fadeIn slower delay-2s">
              <Link to="/coffee">
                <img src={coffeeLink} alt="prototye-coffee-link" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
