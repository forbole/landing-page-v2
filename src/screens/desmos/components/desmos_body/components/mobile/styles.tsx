import styled from "styled-components";
import { media } from "@styles";

export const MobileCSS = styled.div`
  ${media.bigDesktop`
    display: none;
  `}
`;

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

  .visit-website {
    color: white;
  }

  .content-container {
    display: flex;
    flex-direction: column;
  }
`;

export const DesmosLogoCSS = styled.img`
  width: 50px;
`;
