import React, { FC } from "react";
import TopicPage from "../templates/topic-page";

import { PageHeader, ListStyles } from "./styles";

const DevPage: FC<{}> = () => {
  return (
    <TopicPage variant="dev">
      <PageHeader>
        <h1>Prototoype development</h1>
        <p>
          We design and build digital solutions to help forward-thinking
          organisations bridge the gap between customers, business goals and
          technology.
        </p>
      </PageHeader>

      <p>
        <strong>We specialise in —</strong>
      </p>
      <ListStyles>
        <li>Web development</li>
        <li>UI/UX design</li>
        <li>Search engine optimisation (SEO)</li>
      </ListStyles>

      <p>
        For enquiries, reach us at{" "}
        <a href="mailto:dev@prototypes.sg?subject=Inquiry on development services">
          dev@prototypes.sg
        </a>
      </p>
    </TopicPage>
  );
};

export default DevPage;
