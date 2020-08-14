import styled from "styled-components";
import { mixins, media } from "@styles";
import { MaxWidthContainerCSS as MaxWidthCSS } from "@styles/components";

export const CarouselCSS = styled.div`
  display: none;
  ${media.bigDesktop`
   ${mixins.desktopPadding}
   display: flex;
   justify-content: center;
   align-items: center;
  `}
`;

export const TestCSS = styled.span`
  position: absolute;

  svg {
    width: 35px;
  }

  &.right {
    right: -50px;
  }

  &.left {
    left: -50px;
  }
`;

export const MoreTestCSS = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
`;

export const MaxWidthContainerCSS = styled(MaxWidthCSS)`
  position: relative;
`;
