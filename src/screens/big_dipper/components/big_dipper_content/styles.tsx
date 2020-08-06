import styled from "styled-components";
import { mixins, theme, media } from "@styles";

const { colors } = theme;

export const BDContentCSS = styled.div`
  // ${mixins.mobileHorizontalPadding}
  ${mixins.mobileBottomPadding}
  ${mixins.mobilePadding}
  ${mixins.flexCenter}
  display: flex;
  flex-direction: column;
  width: 100%;
  img {
    border-radius: 1rem;
    -webkit-filter: drop-shadow(1rem 1rem 2rem rgba(0,0,0,0.2));
    filter: drop-shadow(1rem 1rem 2rem rgba(0,0,0,0.2));
    margin-bottom: 2rem;
  }
`;
