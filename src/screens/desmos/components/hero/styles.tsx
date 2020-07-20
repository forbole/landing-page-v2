import styled from "styled-components";
import { theme, media } from "@styles";

const { headerMargin } = theme;

export const HeroCSS = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.68),
      rgba(0, 0, 0, 0.68)
    ),
    url("forbole_background/desmos_hero.png");
  height: 50vh;
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.bigDesktop`
    height: 70vh;
    background-image: linear-gradient(
      0deg,
      rgba(123, 135, 185, 0.33),
      rgba(123, 135, 185, 0.33)
    ),
    url("forbole_background/desmos_hero.png");
    flex-direction: row-reverse;
  `}
`;

export const HeroDetailsCSS = styled.div`
  h2 {
    color: white;
    margin-bottom: ${headerMargin.small};
  }

  p {
    color: white;
  }

  ${media.bigDesktop`
    width: 60%;
    background: white;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      color: black;
    }

    p {
      color: black;
    }
  `}
`;

export const DesmosLogoCSS = styled.img`
  width: 50px;
`;

