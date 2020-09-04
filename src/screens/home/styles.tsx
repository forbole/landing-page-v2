import styled from "styled-components";
import { media } from "@styles";

export const HomeCSS = styled.div`
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
  ${media.bigDesktop`
  .awssld {
    height: 43rem;
  }`}
`;
