import styled from "styled-components";
import { tokens } from "../../tokens";

const { breakpoint, font } = tokens;

export const Particle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const ContentIntro = styled.p`
  @media (min-width: ${breakpoint.tablet}) {
    font-size: ${font.size.l};
  }
`;
