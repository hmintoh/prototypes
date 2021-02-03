import styled from "styled-components";
import { tokens } from "../../styles/tokens";

const { breakpoint, font } = tokens;

export const ContentIntro = styled.div`
  h1 {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap; /* added line */
    border: 0;
  }

  img {
    max-width: 400px;
  }

  p {
    // margin-top: 0;
  }

  @media (min-width: ${breakpoint.tablet}) {
    p {
      font-size: ${font.size.l};
    }
  }
`;
