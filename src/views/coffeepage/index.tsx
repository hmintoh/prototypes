import React, { FC } from "react";
import { Link } from "react-router-dom";
import TopicPage from "../templates/topic-page";

import { ContentIntro } from "./styles";

const CoffeePage: FC<{}> = () => {
  return (
    <TopicPage variant="coffee">
      <ContentIntro>
        A good cup of coffee speaks of the collective effort and success of the
        many hands that went into delivering the coffee into your hands. From
        the farmers to the roasters to the baristas, they all play in part in
        preserving the flavors of the coffee along its journey. These are all
        part of a coffee's story.
      </ContentIntro>

      <p>
        With prototype coffee, our goal is to share these stories and journeys
        with the community. We aim to provide quality coffee experience by
        constantly working towards improvements in our technique and service.
        For enquiries, please get in touch at{" "}
        <a href="mailto:coffee@prototypes.sg?subject=Inquiry on coffee cart services">
          coffee@prototypes.sg
        </a>
      </p>
    </TopicPage>
  );
};

export default CoffeePage;
