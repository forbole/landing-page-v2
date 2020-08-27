import styled from "styled-components";

export const ProgressBarCSS = styled.div`
  #svg circle {
    stroke-dashoffset: 0;
    stroke: rgba(255, 255, 255, 0.5);
    stroke-width: 0.2rem;
  }
  #svg #bar {
    stroke: rgba(255, 255, 255, 1);
    animation: mymove 3s infinite;
  }
  @keyframes mymove {
    from {
      stroke-dashoffset: 565.48px;
    }
    to {
      stroke-dashoffset: 0px;
    }
  }
  //   svg {
  //     display: block;
  //     margin: 20px auto;
  //     max-width: 100%;
  //   }

  //   .svg-circle-bg {
  //     fill: none;
  //   }

  //   .svg-circle {
  //     fill: none;
  //   }
`;
