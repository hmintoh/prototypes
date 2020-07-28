import styled from "styled-components";
import { tokens } from "../../tokens";

const { color, breakpoint, spacing } = tokens;

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
  background: ${color.natural.dark};
`;

export const ContentWrapper = styled.div`
  color: ${color.system.black};
  text-align: center;
  margin: auto;
  max-width: ${breakpoint.tablet};

  img {
    width: 260px;
  }
`;

export const ContentSummary = styled.div.attrs({
  className:
    "animate__animated animate__fadeIn animate__slower animate__delay-1s",
})`
  margin: auto;

  @media (min-width: ${breakpoint.tablet}) {
    padding: 0rem ${spacing.m};
    max-width: ${breakpoint.mobile};
  }
`;

export const ContentLinks = styled.div.attrs({
  className:
    "animate__animated animate__fadeIn animate__slower animate__delay-1s",
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
