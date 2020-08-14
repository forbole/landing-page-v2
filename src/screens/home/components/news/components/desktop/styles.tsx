import styled from "styled-components";
import { mixins, media } from "@styles";

export const CarouselCSS = styled.div`
  display: none;
  ${media.bigDesktop`
    ${mixins.flexCenter}
   ${mixins.desktopPadding}
  `}
`;
