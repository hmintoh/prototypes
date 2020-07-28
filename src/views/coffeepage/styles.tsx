import styled from "styled-components";
import { tokens } from "../../tokens";

const { color, breakpoint, spacing, font } = tokens;

const defaultPageWrapperStyles = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 ${spacing.m};

  @media (min-width: ${breakpoint.tablet}) {
    padding: 0;
  }
`;

export const PageWrapper = styled(defaultPageWrapperStyles)`
  background: linear-gradient(
    to top left,
    ${color.natural.light} 75%,
    transparent 25%
  );
`;

export const ContentWrapper = styled.div.attrs({
  className: "animate__animated animate__fadeInRight animate__slower",
})`
  color: ${color.blue};
  margin: auto;
  max-width: ${breakpoint.tablet};

  @media (min-width: ${breakpoint.tablet}) {
    color: ${color.natural.dark};

    :hover {
      color: ${color.blue};
      transition: all 0.5s ease;
    }
  }
`;

export const LinkContainer = styled.div.attrs({
  className: "animate__animated animate__rotateInDownLeft animate__slower",
})`
  a {
    width: ${spacing.xxxxl};
    height: ${spacing.xxxxl};
    border-radius: 0 0 ${spacing.xxxl} 0;
    -moz-border-radius: 0 0 ${spacing.xxxl} 0;
    -webkit-border-radius: 0 0 ${spacing.xxxl} 0;

    :hover {
      background: ${color.natural.dark};
      transform: scale(1.2);
      transition: all 0.2s ease;
    }
  }

  @media (min-width: ${breakpoint.tablet}) {
    a {
      padding: ${spacing.xs} 0 0 ${spacing.xs};
    }
  }
`;

export const ContentIntro = styled.p`
  @media (min-width: ${breakpoint.tablet}) {
    font-size: ${font.size.l};
  }
`;

export const ContentBody = styled.p`
  a:hover {
    border-bottom: 2px solid ${color.blue};
  }
`;
