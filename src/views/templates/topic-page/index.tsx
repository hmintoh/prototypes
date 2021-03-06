import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import chevronLeftLight from "../../../assets/icons/chevron-left-light.svg";

import {
  PageWrapper,
  ContentWrapper,
  LinkContainer,
  ContentContainer,
} from "./styles";

interface TopicPageProps {
  children: ReactNode;
  variant: "dev" | "coffee";
}

const TopicPage = (props: TopicPageProps) => {
  const { children, variant } = props;

  return (
    <PageWrapper variant={variant}>
      <ContentWrapper>
        {/* <LinkContainer>
          <Link to="/">
            <img
              src={variant === "dev" ? chevronLeftLight : chevronLeftLight}
              alt="back-button"
              width="28"
              height="28"
            />
          </Link>
        </LinkContainer> */}

        <ContentContainer>{children}</ContentContainer>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default TopicPage;
