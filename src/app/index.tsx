import React, { FC } from "react";
import Router from "./router";
import Footer from "../components/footer";

import { AppWrapper, BodyWrapper } from "./styles";

const App: FC<{}> = () => {
  return (
    <AppWrapper>
      <BodyWrapper>
        <Router />
      </BodyWrapper>
      <Footer />
    </AppWrapper>
  );
};

export default App;
