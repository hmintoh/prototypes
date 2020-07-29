import React, { FC } from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import TopicPage from "../templates/topic-page";

import { ContentIntro, Particle } from "./styles";
import { tokens } from "../../styles/tokens";

const DevPage: FC<{}> = () => {
  return (
    <TopicPage variant="dev">
      <Particle>
        <Particles
          params={{
            particles: {
              number: { value: 20 },
              size: { value: 2 },
              move: { speed: 1 },
              color: { value: tokens.color.pink.light },
              line_linked: { color: tokens.color.pink.light },
            },
          }}
        />
      </Particle>

      <ContentIntro>
        We design and build digital solutions to help forward-thinking
        organisations bridge the gap between customers, business goals and
        technology.
      </ContentIntro>

      <p>
        For enquiries, please get in touch at{" "}
        <a href="mailto:dev@prototypes.sg?subject=Inquiry on development services">
          dev@prototypes.sg
        </a>
        .
      </p>
    </TopicPage>
  );
};

export default DevPage;
