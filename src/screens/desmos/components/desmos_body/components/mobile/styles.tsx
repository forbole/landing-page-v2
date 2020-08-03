import styled from "styled-components";
import { media, theme } from "@styles";
import { CoverCSS } from "@stylesComponents";
const { padding } = theme;

export const MobileCSS = styled.div`
  ${media.bigDesktop`
    display: none;
  `}
`;

export const HeroCSS = styled(CoverCSS)`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.68),
      rgba(0, 0, 0, 0.68)
    ),
    url("forbole_background/desmos_hero.png");

  .visit-website {
    color: white;
    font-weight: 300;
  }
`;

export const DesmosLogoCSS = styled.img`
  width: 50px;
`;
