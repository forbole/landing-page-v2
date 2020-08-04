import styled from "styled-components";
import { mixins, media } from "@styles";

export const WhatWeDoCSS = styled.div`
  ${mixins.mobilePadding}

  h3 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style-type: none;
  }

  ${media.tablet`
    p {
      margin-bottom: 0.5rem;
    }
  `}

  ${media.bigDesktop`
    ${mixins.flexCenter}

    h3 {
      font-size: 2rem;
    }

    ul {
      list-style-type: disc;
    }

    .max-width-container {
      ${mixins.desktopMaxWidth}
      width: 100%;
    }
  `}
`;

export const PillarCSS = styled.li`
  margin-bottom: 1rem;

  .title {
    font-weight: 600;
    margin-bottom: 0;
  }

  ${media.bigDesktop`
    margin-left: 1rem;
  `}
`;
