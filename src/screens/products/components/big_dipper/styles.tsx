import styled from "styled-components";
import { theme } from "@styles";
const { colors } = theme;
export const BigDipperCSS = styled.span`
  background: url("/static/images/assets/bigdipper-backgroud.svg");
  background-repeat: no-repeat;
  position: relative;
  .displayBackground {
    a.active {
      color: ${() => colors.forboleRed};
      div {
        color: ${() => colors.forboleRed};
      }
    }
  }
`;
