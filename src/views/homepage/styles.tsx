import styled from "styled-components";
import { tokens } from "../../styles/tokens";
import bg from "../../assets/images/bg_cloud_brown_2.jpg";

const { color, breakpoint, spacing } = tokens;

const defaultPageWrapperStyles = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
  flex: 1;
  padding: 0 ${spacing.m};

  @media (min-width: ${breakpoint.tablet}) {
    padding: 0;
  }
`;

export const PageWrapper = styled(defaultPageWrapperStyles)`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${bg});
  background-size: cover;
`;

export const ContentWrapper = styled.div`
  color: ${color.system.black};
  text-align: center;
  margin: auto;
  max-width: ${breakpoint.tablet};
  padding: ${spacing.xxxl} 0;

  @media (min-width: ${breakpoint.tablet}) {
    padding: 0;
  }
`;

export const ContentImage = styled.div.attrs({
  className: "animate__animated animate__fadeIn",
})`
  display: flex;
  justify-content: center;

  img {
    width: 280px;
  }
`;

export const ContentSummary = styled.div.attrs({
  className:
    "animate__animated animate__fadeIn animate__slower animate__delay-1s",
})`
  margin: auto;

  @media (min-width: ${breakpoint.tablet}) {
    padding: 0rem ${spacing.m};
    max-width: ${breakpoint.mobile};
  }
`;

export const ContentLinks = styled.div.attrs({
  className:
    "animate__animated animate__fadeIn animate__slower animate__delay-1s",
})`
  display: flex;
  margin: auto;
  justify-content: center;

  img {
    width: 200px;
  }
`;
