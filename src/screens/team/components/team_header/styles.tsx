import styled from "styled-components";
import { theme, media, mixins } from "@styles";

const { headerMargin } = theme;

export const TeamHeaderCSS = styled.div`
  ${mixins.mobileHorizontalPadding}
  padding-top: 5rem;
  width: 100%;
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: flex-start;
  background: linear-gradient(0deg, rgb(32, 6, 105, 0.7), rgb(24, 0, 88, 0.84)),
    url("/static/images/assets/contact-us.png");
  height: 350px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  h2 {
    color: white;
    font-weight: 300;
    margin-bottom: ${headerMargin.small};
  }

  p {
    color: white;
    font-weight: 100;
  }

  ${media.bigDesktop`
    background: url("/static/images/assets/team.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    display: flex;
    align-items: center;
    height: 500px;
    padding-top: 11rem;

  h2 {
    ${mixins.desktopMaxWidth}
    font-size: 2.5rem;
    width: 100%;
    padding-left: 1.5rem;
  }

  p {
    ${mixins.desktopMaxWidth}
    width: 100%;
    font-weight: 100;
    font-size: 1.5rem;
    padding-left: 1.5rem;
  }

  .background{
    align-items: center;
  }`}
`;
