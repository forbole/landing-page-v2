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
  min-height: 50vh;
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.bigDesktop`
    background: green;
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
`;

export const DesmosLogoCSS = styled.img`
  width: 50px;
`;

