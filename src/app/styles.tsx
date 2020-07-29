import styled from "styled-components";
import { tokens } from "../styles/tokens";

const { spacing, breakpoint } = tokens;

export const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100vw;
  min-height: 100vh;
`;

export const BodyWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-flow: column;
`;
