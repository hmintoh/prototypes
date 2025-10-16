import styled from "styled-components";
import { tokens } from "../../styles/tokens";

const { spacing, font, color } = tokens;

export const FooterWrapper = styled.footer`
  background-color: ${color.natural.dark};
  color: inherit;
  font-size: ${font.size.xs};
  padding: ${spacing.xxs} 0;
  text-align: center;
`;
