import styled from "styled-components";
import { tokens } from "../tokens";

const { spacing, breakpoint } = tokens;

export const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
`;

export const BodyWrapper = styled.main`
  flex-grow: 1;
`;
