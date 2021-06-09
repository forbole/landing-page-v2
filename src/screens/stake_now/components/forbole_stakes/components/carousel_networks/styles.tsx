import styled from "styled-components";
import { mixins, media, theme } from "@styles";
import { MaxWidthContainerCSS as MaxWidthCSS } from "@styles/components";

const { colors } = theme;

export const CarouselCSS = styled.div`
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
  top: -5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  .carouselItem {
    padding: 0 0.8rem;
    flex: 1 1 11% !important;
  }
  .react-multi-carousel-item--active {
    padding: 0;
    flex: 1 1 13% !important;
  }
  .react-multi-carousel-dot-list {
    margin-bottom: -1rem;
  }
  .react-multi-carousel-list {
    width: 100%;
    height: 300px;
    .react-multi-carousel-track {
      align-items: center;
      justify-content: center;
    }
  }
  .react-multi-carousel-dot button {
    background: rgba(189, 8, 28, 0.3);
    border-color: transparent;
    margin-right: 4px;
  }
  .react-multi-carousel-dot--active button {
    background: rgba(189, 8, 28, 1);
  }
  ${media.tablet`
    top: -8rem;
    .react-multi-carousel-list {
      height: 400px;
    }
  `}
  ${media.bigDesktop`
    top: 1.2rem;
    .react-multi-carousel-list {
      width: 90%;
      height: 410px;
      justify-content: space-between;
      .react-multi-carousel-track {
        align-items: center;
      }
    }
    .carouselItem {
      flex: 1 1 auto !important;
    }
    .react-multi-carousel-item--active {
      width: 345px !important;
      flex: 1 1 auto !important;
    }
  `}
`;
