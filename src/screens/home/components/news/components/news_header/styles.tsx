import styled from "styled-components";
import { media, mixins } from "@styles";

export const NewsHeaderCSS = styled.div`
  ${mixins.mobilePadding}
  h2 {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  p {
    line-height: 1.5;
  }
  ${media.tablet`
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
  `}
  ${media.bigDesktop`
  ${mixins.flexCenter}
  padding: 5rem 1.5rem 2.5rem;
    .desktopWrapper{ 
      ${mixins.desktopMaxWidth}
      ${mixins.flexCenter}
      flex-direction: column;
      width: 100%;
    }
  `}
`;
