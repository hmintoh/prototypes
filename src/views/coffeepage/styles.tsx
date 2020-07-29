import styled from "styled-components";
import { tokens } from "../../styles/tokens";

const { breakpoint, font } = tokens;

export const ContentIntro = styled.p`
  @media (min-width: ${breakpoint.tablet}) {
    font-size: ${font.size.l};
  }
`;
