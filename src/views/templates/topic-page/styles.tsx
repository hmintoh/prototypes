import styled, { css } from "styled-components";
import { tokens } from "../../../styles/tokens";
import bgBlue from "../../../assets/images/bg_cloud_blue.jpg";

const { color, breakpoint, spacing, font } = tokens;

const lightDefaultFontColor = color.natural.dark;
const lightHoverFontColor = color.blue;
const darkDefaultFontColor = color.natural.dark;
const darkHoverFontColor = color.natural.dark;

interface TemplateProps {
  variant: "dev" | "coffee";
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
    display: flex;
    width: auto;
    height: auto;
    padding-right: ${spacing.xxl};
  }

  @media (min-width: ${breakpoint.tablet}) {
    :hover {
      transform: translateX(-30%);
      transition: all 0.2s ease;
    }
  }
`;

export const ContentContainer = styled.div.attrs({
  className: "animate__animated animate__fadeInRight animate__slower",
})`
  *::selection {
    background: ${color.maize};
  }
`;

export const PageWrapper = styled(defaultPageWrapperStyles)<TemplateProps>`
  ${(props) =>
    props.variant === "dev" &&
    css`
      background-image: url(${bgBlue});
      background-size: cover;

      ${ContentContainer} {
        color: ${darkDefaultFontColor};

        a:hover {
          border-bottom: 2px solid ${darkHoverFontColor};
        }
      }
    `}

  ${(props) =>
    props.variant === "coffee" &&
    css`
      background: linear-gradient(
        to top left,
        ${color.natural.light} 75%,
        transparent 25%
      );

      ${ContentContainer} {
        color: ${lightHoverFontColor};

        @media (min-width: ${breakpoint.tablet}) {
          color: ${lightDefaultFontColor};

          :hover {
            color: ${lightHoverFontColor};
            transition: all 0.3s ease;
          }

          a:hover {
            border-bottom: 2px solid ${lightHoverFontColor};
          }
        }
      }
    `}
`;
