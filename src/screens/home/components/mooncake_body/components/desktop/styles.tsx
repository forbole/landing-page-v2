import styled from "styled-components";
import { media, theme, mixins } from "@styles";
import {
  CONTAINER_HEIGHT,
  CONTAINER_WIDTH,
  CONTAINER_MIN_HEIGHT,
} from "../../../../config";

const { colors } = theme;

export const DesktopCSS = styled.div`
  display: none;
  ${media.bigDesktop`
    min-height: ${CONTAINER_MIN_HEIGHT};
    ${mixins.flexCenter}
    justify-content: flex-start; 
    flex-direction: row;
    background: linear-gradient( 0deg,rgba(123,135,185,0.33),rgba(123,135,185,0.33) ),url(static/images/assets/desmos-hero.png);
    background-repeat: no-repeat;
    background-position: 1005px center;
    -webkit-transform: scaleX(-1);
    -ms-transform: scaleX(-1);
    transform: scaleX(-1);
    width: 100%;
    position: relative
    `}
`;

export const MooncakeBodyCSS = styled.div`
  height: ${CONTAINER_HEIGHT};
  min-height: ${CONTAINER_MIN_HEIGHT};
  width: ${CONTAINER_WIDTH};
  display: flex;
  align-items: center;
  position: relative;
  width: 55%;
  background: ${colors.white};
  height: 80vh;
  min-height: 800px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  transform: scaleX(-1);
`;

export const MooncakeContentCSS = styled.div`
  max-width: 500px;
`;

export const MooncakeImgCSS = styled.div`
  transform: scaleX(-1);
  position: absolute;
  left: -450px;
  top: 20%;
  max-height: 45vh;
  z-index: 1;
`;
