import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import chevronLeft from "../../../assets/icons/chevron-left.svg";
import { PageWrapper, ContentWrapper, LinkContainer } from "./styles";

interface TopicPageProps {
  children: ReactNode;
  variant: "dev";
}

const TopicPage = (props: TopicPageProps) => {
  const { children, variant } = props;

  return (
    <PageWrapper variant={variant}>
      <ContentWrapper>
        <LinkContainer>
          <Link to="/">
            <img src={chevronLeft} alt="back-button" width="24" height="24" />
          </Link>
        </LinkContainer>

        {children}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default TopicPage;
