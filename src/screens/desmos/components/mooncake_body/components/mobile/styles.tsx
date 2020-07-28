import styled from "styled-components";
import { mixins, media } from "@styles";

export const BodyCSS = styled.div`
  ${mixins.mobileHorizontalPadding}
  ${mixins.mobileBottomPadding}

  ${media.bigDesktop`
    display: none;
  `}
`;
