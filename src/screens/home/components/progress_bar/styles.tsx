import styled from "styled-components";

export const ProgressBarCSS = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }

  #svg circle {
    stroke-dashoffset: 0;
    stroke: rgba(255, 255, 255, 0.5);
    stroke-width: 0.2rem;
  }
  #svg #bar {
    stroke: rgba(255, 255, 255, 1);
    animation: mymove 8s infinite;
    animation-timing-function: linear;
  }
  @keyframes mymove {
    from {
      stroke-dashoffset: 565.48px;
    }
    to {
      stroke-dashoffset: 440.48px;
    }
  }
  i.icon {
    z-index: 1;
    position: absolute;
    right: 37px;
    bottom: 49px;
    color: white;
  }
`;
