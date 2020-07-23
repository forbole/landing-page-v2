import styled from "styled-components";
import { media, theme, mixins } from "@styles";

const { colors } = theme;

export const DesktopNavCSS = styled.div`
  display: none;
  ${media.bigDesktop`
    ${mixins.flexBetween}
    width: 100%;
    position: fixed;
    top: 0;
    padding: 1rem 3rem;
    z-index: 100;

    svg {
      width: 125px;

      path {
        fill: ${colors.forboleRed};
      }
    }
  `}
`;
