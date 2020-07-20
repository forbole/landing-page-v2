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

export const MooncakeContentCSS = styled.div`
  background: white;
  height: ${CONTAINER_HEIGHT};
  width: ${CONTAINER_WIDTH};
`;
