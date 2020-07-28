import styled from "styled-components";
import { tokens } from "../../tokens";

const { spacing, font, breakpoint, color } = tokens;

export const FooterWrapper = styled.footer`
  background-color: ${color.maize};
  color: inherit;
  font-size: ${font.size.xs};
  padding: ${spacing.xs} 0;
  text-align: center;
`;
