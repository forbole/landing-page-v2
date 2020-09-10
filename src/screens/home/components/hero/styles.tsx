import styled from "styled-components";
import { theme, mixins, media } from "@styles";

const { colors } = theme;

export const HeroContentCSS = styled.div`
  ${mixins.flexCenter}
  position: relative;
  flex-direction: column;
  padding: 2.5rem 1rem 1rem;
  color: ${colors.white};
  width: 100%;
  background-image: linear-gradient(0deg, rgb(0, 0, 0, 0.4), rgb(0, 0, 0, 0.1)),
    url("static/images/assets/horse.png");
  background-size: 444%;
  background-repeat: no-repeat;
  background-position: 50% 52%;
  height: 90vh;
  .wrapper {
    ${mixins.flexCenter}
    flex-direction: column;
    padding-bottom: 5rem;
    height: 70vh;
  }
  ${media.tablet`
  background-size: 181%;
  background-position: 50% 42%;
  `}
  ${media.bigDesktop`
  background-size: 100%;
  background-position: 50% 55%;
  min-height: 35rem;
  width: 100%;
  .wrapper {
    ${mixins.desktopMaxWidth}
  }
  `}
`;

export const MainContentCSS = styled.div`
  ${mixins.flexCenter}
  flex-direction: column;
  text-align: center;
  width: 100%;
  h1 {
    font-size: 1.8rem;
    font-weight: 100;
    line-height: 1rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.7rem;
    margin-bottom: 1rem;
    line-height: 1.1rem;
    font-weight: 100;
    width: 16rem;
  }
  ${media.tablet`
  h1 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
    width: 37rem;
  }
  `}
`;

export const HomeIconsCSS = styled.div`
  ${mixins.flexBetween}
  display: inline-flex;
  flex-wrap: wrap;
  width: 17rem;
  .icon {
    border-radius: 0.5rem;
    border: 1px solid ${colors.white};
    box-sizing: border-box;
    width: 4rem;
    height: 4rem;
    ${mixins.flexCenter}
    flex-direction: column;
    font-size: 0.8rem;
  }
  svg {
    width: 30px;
    height: 30px;
  }
  svg > path {
    fill: ${colors.white};
  }
  ${media.tablet`
  width: 20rem;
  `}
  ${media.bigDesktop`
  `}
`;
export const NextIconCSS = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: block;
  margin-left: auto;
  margin-right: 0;
  svg > path {
    fill: ${colors.white};
  }
`;
