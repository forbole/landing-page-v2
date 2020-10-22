import styled from "styled-components";
import { media } from "@styles";

export const HomeCSS = styled.div`
  .pb {
    position: relative;
  }
  .awssld__wrapper {
    display: block;
    overflow: hidden;
    position: relative;
    height: 100vh;
    width: 100%;
    min-height: 35rem;
  }

  .slider-wrapper {
    height: 100%;
  }

  .aws-btn  {
    --slider-height-percentage: 61%;
    --slider-transition-duration: 800ms;
    --organic-arrow-thickness: 4px;
    --organic-arrow-border-radius: 0px;
    --organic-arrow-height: 40px;
    --organic-arrow-color: #d6b18f;
    --control-button-width: 10%;
    --control-button-height: 25%;
    --control-button-background: transparent;
    --control-bullet-color: #fcd0a8;
    --control-bullet-active-color: #d6b18f;
    --loader-bar-color: #ffffff;
    --loader-bar-height: 1px;
  }
  .hero-slider {
    width: 100%;
  }
  .awssld {
    height: 100%;
  }
  .awssld__bullets {
    display: none;
  }
  .awssld__content {
    background-color: var(--content-background-color);
    overflow: hidden;
    display: block;
  }
  ${media.bigDesktop`
 `}
`;

export const CustomContent = styled.div`
  z-index: 50;
  position: absolute;
  bottom: 0;
  right: 0;
`;
