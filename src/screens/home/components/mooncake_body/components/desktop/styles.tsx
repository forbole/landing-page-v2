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
  height: ${CONTAINER_HEIGHT};
    min-height: ${CONTAINER_MIN_HEIGHT};
    ${mixins.flexCenter};
    flex-direction: row;
    width: 100%;
    `}
`;

export const MooncakeBodyCSS = styled.div`
  height: ${CONTAINER_HEIGHT};
  min-height: ${CONTAINER_MIN_HEIGHT};
  width: ${CONTAINER_WIDTH};
  display: flex;
  position: relative;
  width: 55%;
  background: ${colors.white};
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
  padding-left: 7rem;
`;

export const MooncakeContentCSS = styled.div`
  max-width: 500px;
  position: relative;
  padding-right: 5rem;
`;

export const MooncakeImgCSS = styled.div`
  position: absolute;
  left: -620px;
  top: -70px;
  max-height: 45vh;
  z-index: 1;
`;

export const BackgroundCSS = styled.div`
  height: ${CONTAINER_HEIGHT};
  min-height: ${CONTAINER_MIN_HEIGHT};
  width: ${CONTAINER_WIDTH};
  background: linear-gradient(
      0deg,
      rgba(123, 135, 185, 0.33),
      rgba(123, 135, 185, 0.33)
    ),
    url("/static/images/assets/desmos-hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 center;
  display: flex;
  flex: 1;
  background-color: black;
  transform: scaleX(-1);
`;
