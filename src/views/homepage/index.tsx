import React, { FC } from "react";

import logo from "../../assets/images/proto_blue.png";

import {
  PageWrapper,
  ContentWrapper,
  ContentImage,
  ContentSummary,
} from "./styles";

const HomePage: FC<{}> = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <ContentImage>
          <img src={logo} alt="prototype-logo" />
        </ContentImage>

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
      </ContentWrapper>
    </PageWrapper>
  );
};

export default HomePage;
