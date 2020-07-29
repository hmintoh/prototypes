import styled, { css } from "styled-components";
import { tokens } from "../../../tokens";

const { color, breakpoint, spacing, font } = tokens;

const defaultFontColor = color.natural.dark;
const hoverFontColor = color.natural.dark;

interface PageWrapperProps {
  variant: "dev";
}

const defaultPageWrapperStyles = styled.section`
  display: flex;
  align-items: center;
  flex: 1;
  overflow-x: hidden;
  padding: 0 ${spacing.m};

  @media (min-width: ${breakpoint.tablet}) {
    padding: 0;
  }
`;

export const PageWrapper = styled(defaultPageWrapperStyles)<PageWrapperProps>`
  ${(props) =>
    props.variant === "dev" &&
    css`
      background: linear-gradient(
        to top right,
        ${color.blue} 75%,
        ${color.blue} 25%
      );
    `}
`;

export const ContentWrapper = styled.div.attrs({
  className: "animate__animated animate__fadeInRight animate__slower",
})`
  margin: auto;
  max-width: ${breakpoint.tablet};
  padding: 20% 0 10% 0;

  @media (min-width: ${breakpoint.tablet}) {
    padding: 0;
  }
`;

export const LinkContainer = styled.div`
  display: inline-block;

  a {
    width: ${spacing.xxxxl};
    height: ${spacing.xxxxl};
    border-radius: 0 0 ${spacing.xxxl} 0;
    -moz-border-radius: 0 0 ${spacing.xxxl} 0;
    -webkit-border-radius: 0 0 ${spacing.xxxl} 0;
  }

  @media (min-width: ${breakpoint.tablet}) {
    :hover {
      background: none;
      transform: translateX(-30%);
      transition: all 0.2s ease;
    }
  }
`;

export const ContentContainer = styled.div.attrs({
  className: "animate__animated animate__fadeInRight animate__slower",
})`
  color: ${defaultFontColor};

  *::selection {
    background: ${color.maize};
  }

  a:hover {
    border-bottom: 2px solid ${hoverFontColor};
  }
`;
