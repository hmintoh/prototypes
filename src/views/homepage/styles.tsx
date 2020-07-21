import styled from "styled-components";
import { tokens } from "../../tokens";

const { color, breakpoint, spacing } = tokens;

export const PageWrapper = styled.section`
  background: ${color.natural.dark};
  color: ${color.natural.dark};
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: ${spacing.m} 0;
  max-width: ${breakpoint.tablet};

  img {
    width: 260px;
  }

  @media (min-width: ${breakpoint.tablet}) {
    padding: ${spacing.l} 0;
  }
`;

export const ContentSummary = styled.div.attrs({
  className: "animated fadeIn slower delay-1s",
})`
  padding: 0rem ${spacing.m};
  color: ${color.system.black};

  @media (min-width: ${breakpoint.tablet}) {
    max-width: ${breakpoint.mobile};
    margin: auto;
  }
`;

export const ContentLinks = styled.div.attrs({
  className: "animated fadeIn slower delay-1s",
})`
  display: flex;
  margin: auto;
  justify-content: center;

  img {
    width: 200px;
  }
`;

// #particles-js {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   z-index: -1;
// }
