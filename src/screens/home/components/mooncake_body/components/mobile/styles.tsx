import styled from "styled-components";
import { mixins, media } from "@styles";

export const BodyCSS = styled.div`
  ${media.bigDesktop`
    display: none;
  `}
`;

export const ContentCSS = styled.div`
  ${mixins.mobileHorizontalPadding}
  margin-top: -12rem;
  ${media.tablet`
  margin-top: -16rem;
  img {
    max-width: 683px;
    margin: 0 1rem;
  }
  `}
`;

export const HeroCSS = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(123, 135, 185, 0.33),
      rgba(123, 135, 185, 0.33)
    ),
    url("/static/images/assets/desmos-hero.jpg");
  background-size: 134%;
  background-repeat: no-repeat;
  background-position: left bottom;
  position: relative;
  transform: scaleX(-1);
  z-index: -1;
  height: 15rem;
  width: 100%;
  ${media.tablet`
  height: 30rem;
  `}
`;
