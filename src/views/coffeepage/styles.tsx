import styled from "styled-components";
import { tokens } from "../../tokens";

const { color, breakpoint, font } = tokens;

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
