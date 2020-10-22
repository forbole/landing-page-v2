import styled from "styled-components";
import { media, theme } from "@styles";
import {
  CONTAINER_HEIGHT,
  CONTAINER_WIDTH,
  CONTAINER_MIN_HEIGHT,
} from "../../../../config";

const { colors } = theme;

export const DesktopCSS = styled.div`
  display: none;
  ${media.bigDesktop`
    display: block;
    background: ${colors.gray100};
  `}
`;

export const MooncakeBodyCSS = styled.div`
  background: white;
  height: ${CONTAINER_HEIGHT};
  width: ${CONTAINER_WIDTH};
  min-height: ${CONTAINER_MIN_HEIGHT};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

export const MooncakeContentCSS = styled.div`
  padding-left: 3.5rem;
  margin-right: 8.5rem;
  max-width: 700px;
`;

export const MooncakeImgCSS = styled.div`
  position: absolute;
  right: -500px;
  top: 20%;
  max-height: 45vh;
`;
