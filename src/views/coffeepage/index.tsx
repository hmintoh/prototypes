import React, { FC } from "react";
import TopicPage from "../templates/topic-page";

import coffeeLogo from "../../assets/images/coffee-title.svg";

import { ContentIntro } from "./styles";

const CoffeePage: FC<{}> = () => {
  return (
    <TopicPage variant="coffee">
      <ContentIntro>
        <h1>prototype Coffee</h1>
        <img src={coffeeLogo} alt="prototoype coffee logo" />
        <p>
          A good cup of coffee speaks of the collective effort and success of
          the many hands that went into delivering the coffee into your hands.
          From the farmers to the roasters to the baristas, they all play in
          part in preserving the coffee's character and form its story.
        </p>
      </ContentIntro>

      <p>
        With prototype coffee, our goal is to share these stories with the
        community. We aim to provide quality coffee experience by constantly
        working towards improvements in our technique and service. For
        enquiries, please get in touch at{" "}
        <a href="mailto:coffee@prototypes.sg?subject=Inquiry on coffee cart services">
          coffee@prototypes.sg
        </a>
      </p>
    </TopicPage>
  );
};

export default CoffeePage;
