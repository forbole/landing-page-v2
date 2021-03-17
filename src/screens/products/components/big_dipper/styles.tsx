import styled from "styled-components";
import { theme, media, mixins } from "@styles";
const { colors } = theme;
export const BigDipperCSS = styled.span`
  position: relative;
  .displayBackground {
    a.active {
      color: ${() => colors.forboleRed};
      div {
        color: ${() => colors.forboleRed};
      }
    }
  }
  ${media.bigDesktop`
  ${mixins.desktopPadding}
  padding-bottom: 7rem;
  background: url("/static/images/assets/bigdipper-backgroud.svg");
  background-repeat: no-repeat;
  `}
`;
