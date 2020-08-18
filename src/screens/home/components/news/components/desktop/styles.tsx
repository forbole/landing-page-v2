import styled from "styled-components";
import { mixins, media } from "@styles";
import { MaxWidthContainerCSS as MaxWidthCSS } from "@styles/components";

export const CarouselCSS = styled.div`
  display: none;
  ${media.bigDesktop`
   ${mixins.desktopLastContainerPadding}
   display: flex;
   justify-content: center;
   align-items: center;
  `}
`;

export const ArrowCSS = styled.span`
  position: absolute;

  svg {
    width: 35px;
    path {
      fill: rgba(0, 0, 0, 0.2);
    }
  }

  &.right {
    right: -50px;
  }

  &.left {
    left: -50px;
    transform: scaleX(-1);
  }
`;

export const CarouselArrowCSS = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
`;

export const MaxWidthContainerCSS = styled(MaxWidthCSS)`
  position: relative;
`;
