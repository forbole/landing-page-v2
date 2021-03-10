import styled from "styled-components";
import { theme, mixins, media } from "@styles";

const { colors } = theme;

export const HeroContentCSS = styled.div`
  ${mixins.mobilePadding};
  background-image: linear-gradient(0deg, rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)),
    url("/static/images/assets/home.png");
  background-repeat: no-repeat;
  background-position: 50% 52%;
  background-size: 444%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  h1 {
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 1.5rem;
  }

  ${media.tablet`
    background-size: cover;
    background-position: center 49%;
  `}
`;

export const MainContentCSS = styled.div`
  text-align: center;
  color: white;

  h1 {
    margin-bottom: 0.5rem;
  }

  ${media.tablet`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 4rem;
    font-weight: 400;
  }
  p {
    font-size: 1.2rem;
    font-weight: 200;
    line-height: 1.5rem;
    width: 100%;
  }
  `}
  ${media.bigDesktop`
  h1 {
    font-size: 5rem;
  }
  p {
    font-size: 1.5rem;
  }
  `}
`;

export const HomeButtonCSS = styled.div`
  padding-top: 2rem;
  .ui.red.button {
    font-weight: 100;
  }
`;

export const HomeIconsCSS = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px solid ${colors.white};
    border-radius: 5px;
    width: 100px;
    height: 100px;
    color: ${colors.white};
    font-size: 0.9rem;
  }
  svg {
    margin-bottom: 0.5rem;
  }
  ${media.tablet`
  .icon {
    width: 80px;
    height: 80px;
    font-size: 0.8rem;
  }
  svg {
    margin-bottom: 0.3rem;
  }
`}
`;
