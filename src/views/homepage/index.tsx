import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

import logo from "assets/images/prototype_asphalt_bold.png";
import coffeeLogo from "assets/images/coffee.png";

import {
  PageWrapper,
  ContentWrapper,
  ContentSummary,
  ContentLinks,
} from "./styles";

const HomePage: FC<{}> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      {/* <div id="particles-js">
        <Particles
          params={{
            particles: {
              number: { value: 30 },
              size: { value: 2 },
              move: { speed: 1 },
              color: { value: "#a66454" },
              line_linked: { color: "#a66454" },
            },
          }}
        />
      </div> */}

      <ContentWrapper>
        <img src={logo} alt="prototype-logo" />

        <ContentSummary>
          <p>
            To prototype is to materialise an idea, no matter how primitive the
            result might seem. That very act takes us on a path of continual
            refinement of what it could be. With Prototype, we want to embrace
            abstract possibilities in a spirit of fearless enquiry.
          </p>
          <p>
            The community revitalises us. What you see today is the result of
            our shared journey; to elevate an existing experience and recreate a
            memory so it runs deeper than before. After all, what is the beauty
            of creating if it cannot be known and shared with?
          </p>
          <p>
            So we welcome you to Prototype - where ideas that have been brewing
            can finally bloom in full.
          </p>
        </ContentSummary>

        <ContentLinks>
          <Link to="/coffee">
            <img src={coffeeLogo} alt="prototye-coffee-link" />
          </Link>
        </ContentLinks>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default HomePage;
