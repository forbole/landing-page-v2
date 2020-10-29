import styled from "styled-components";
import { media, mixins } from "@styles";

export const NewsHeaderCSS = styled.div`
  padding: 2.5rem 1.5rem 1rem;
  h2 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    font-size: 1.5rem;
  }
  p {
    line-height: 1.5;
    font-size: 0.875rem;
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
