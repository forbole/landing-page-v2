import styled from "styled-components";
import { mixins, media } from "@styles";

export const WhatIsStakingCSS = styled.div`
  ${mixins.mobilePadding}

  h3 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  ${media.bigDesktop`
    ${mixins.flexCenter}
  `}
`;

export const MainContentContainerCSS = styled.div`
  ${media.bigDesktop`
    ${mixins.desktopMaxWidth}
  `}
`;

export const SingleContentCSS = styled.div`
  margin-bottom: 1rem;
  ul {
    list-style-type: none;
  }
  ${media.bigDesktop`
    ul {
      list-style-type: disc;
    }
  `}
`;

export const FeatureItemCSS = styled.li`
  margin-bottom: 1rem;

  .feature-title {
    font-weight: 600;
    margin-bottom: 0.3rem;
  }

  ${media.bigDesktop`
    margin-left: 1rem;
  `}
`;
