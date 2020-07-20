import styled from "styled-components";
import { media, theme } from "@styles";
import { CONTAINER_HEIGHT, CONTAINER_WIDTH } from "../../../../config";

const { colors } = theme;

export const DesktopCSS = styled.div`
  display: none;

  ${media.bigDesktop`
    display: block;
    background-image: linear-gradient(
        0deg,
        rgba(123, 135, 185, 0.33),
        rgba(123, 135, 185, 0.33)
      ),
      url("forbole_background/desmos_hero.png");
    background-repeat: no-repeat;
    background-position: 40% bottom;
    display: flex;
    flex-direction: row-reverse;
  `}
`;

export const DesmosBodyCSS = styled.div`
  width: ${CONTAINER_WIDTH};
  background: white;
  height: ${CONTAINER_HEIGHT};
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: black;
  }

  p {
    color: black;
  }

  .ui.button {
    background: ${colors.orange};
    color: white;
    font-weight: 400;
    transition: 0.2s;

    &:hover {
      background: black;
    }
  }
`;

export const DesmosBodyContainerCSS = styled.div`
  width: 70%;
  margin-left: 3.5rem;
`;
