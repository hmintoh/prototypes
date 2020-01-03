import React from "react";
import "./footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <footer>© {currentYear} prototype holdings. all rights reserved.</footer>;
};

export default Footer;
