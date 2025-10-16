import React, { FC } from "react";

import { FooterWrapper } from "./styles";

const Footer: FC<{}> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      Copyright © 2018 - {currentYear} prototype holdings
    </FooterWrapper>
  );
};

export default Footer;
