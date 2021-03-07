import styled from "styled-components";
import { theme, media, mixins } from "@styles";

const { headerMargin } = theme;

export const TeamHeaderCSS = styled.div`
  ${mixins.mobileHorizontalPadding}
  padding-top: 5rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  background: linear-gradient(
      0deg,
      rgba(27, 27, 27, 0.7),
      rgba(27, 27, 27, 0.7)
    ),
    url("/static/images/assets/team.png");
  height: 350px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  h2 {
    color: white;
    font-weight: 400;
    margin-bottom: ${headerMargin.small};
  }

  p {
    color: white;
    font-weight: 100;
    margin-bottom: 0;
  }

  ${media.bigDesktop`
    background: linear-gradient(0deg, rgba(27, 27, 27, 0.7), rgba(27, 27, 27, 0.7)),url("/static/images/assets/team.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    display: flex;
    align-items: center;
    height: 420px;
    padding-top: 10rem;
    justify-content: flex-start;

  h2 {
    ${mixins.desktopMaxWidth}
    font-size: 2.5rem;
    width: 100%;
  }

  p {
    ${mixins.desktopMaxWidth}
    width: 100%;
    font-weight: 100;
    font-size: 1.3rem;
  }

  .background{
    align-items: center;
  }`}
`;
