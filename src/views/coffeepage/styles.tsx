import styled from "styled-components";
import { tokens } from "../../tokens";

const { color, breakpoint, spacing, font } = tokens;

export const PageWrapper = styled.section`
  background: linear-gradient(
    to top left,
    ${color.natural.light} 75%,
    transparent 25%
  );

  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const LinkContainer = styled.div.attrs({
  className: "animated rotateInDownLeft slower",
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

export const ContentWrapper = styled.div.attrs({
  className: "animated fadeInRight slower",
})`
  width: 100%;
  height: 100%;
  margin: auto;
  max-width: ${breakpoint.tablet};
  color: ${color.natural.dark};

  :hover {
    color: ${color.blue};
    transition: all 0.5s ease;
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
