import styled from "styled-components";
import { mixins, media, theme } from "@styles";
import { MaxWidthContainerCSS as MaxWidthCSS } from "@styles/components";

const { colors } = theme;

export const CarouselCSS = styled.div`
  // display: none;
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
      fill: ${colors.offwhite};
    }
  }

  &.right {
    right: 0px;
  }

  &.left {
    left: 0px;
    transform: scaleX(-1);
  }
`;

export const CarouselArrowCSS = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  &:hover {
    cursor: pointer;
  }
`;

export const MaxWidthContainerCSS = styled(MaxWidthCSS)`
  position: relative;
  display: flex;
  justify-content: center;
  .react-multi-carousel-list {
    width: 100%;
    height: 300px;
    .react-multi-carousel-track {
      align-items: center;
    }
  }
  .react-multi-carousel-dot button {
    background: rgba(189, 8, 28, 0.3);
    border-color: transparent;
  }
  .react-multi-carousel-dot--active button {
    background: rgba(189, 8, 28, 1);
  }
  ${media.bigDesktop`
  .react-multi-carousel-list {
    width: 90%;
    height: 410px;
    .react-multi-carousel-track {
      align-items: center;
    }
  }
`}
`;
