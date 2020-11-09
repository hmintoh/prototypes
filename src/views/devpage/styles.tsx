import styled from "styled-components";
import { tokens } from "../../styles/tokens";

const { breakpoint, font, spacing } = tokens;

export const PageHeader = styled.header`
  h1 {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  p {
    font-weight: ${font.weight.bold};

    @media (min-width: ${breakpoint.tablet}) {
      font-size: ${font.size.l};
    }
  }
`;

export const ListStyles = styled.ul`
  margin-top: ${spacing.xxs};
  padding: 0;
  list-style: none;
`;
