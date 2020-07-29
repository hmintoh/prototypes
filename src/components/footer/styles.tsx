import styled from "styled-components";
import { tokens } from "../../styles/tokens";

const { spacing, font, color } = tokens;

export const FooterWrapper = styled.footer`
  background-color: ${color.pink.light};
  color: inherit;
  font-size: ${font.size.xs};
  padding: ${spacing.xs} 0;
  text-align: center;
`;
