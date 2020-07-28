import React, { FC } from "react";

import { FooterWrapper } from "./styles";

const Footer: FC<{}> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      © {currentYear} prototype holdings. all rights reserved.
    </FooterWrapper>
  );
};

export default Footer;
