import styled from "styled-components";
import { media, theme, mixins } from "@styles";
import { IDesktopNavCSS } from "./interfaces";

const { colors } = theme;

export const DesktopNavCSS = styled.div<IDesktopNavCSS>`
  display: none;
  ${media.bigDesktop`
    ${mixins.flexBetween}
    width: 100%;
    position: fixed;
    top: 0;
    padding: 1rem 3rem;
    z-index: 100;
    transition: 0.5s;
    background: ${(props) =>
      props.displayBackground ? "rgba(255, 255, 255, 1)" : "transparent"};

    svg {
      width: 125px;

      path {
        fill: ${colors.forboleRed};
        fill: ${(props) => (props.color ? colors.forboleRed : "white")};
      }
    }
  `}
`;
