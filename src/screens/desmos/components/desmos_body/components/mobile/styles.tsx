import styled from "styled-components";
import { media } from "@styles";
import { CoverCSS } from "@styles/components";

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
    url("/static/images/assets/desmos-hero.jpg");
  background-position: left bottom;

  .visit-website {
    color: white;
    font-weight: 300;
  }
`;

export const DesmosLogoCSS = styled.img`
  width: 50px;
`;
