import styled from "styled-components";
import { media, theme } from "@styles";
import { CONTAINER_HEIGHT, CONTAINER_WIDTH } from "../../../../config";

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
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const MooncakeContentCSS = styled.div`
  padding-left: 3.5rem;
  width: 70%;
`;

export const MooncakeImgCSS = styled.div`
  width: 80%;
  max-width: 1000px;
  position: absolute;
  right: -68%;
  top: 15%;
`;
