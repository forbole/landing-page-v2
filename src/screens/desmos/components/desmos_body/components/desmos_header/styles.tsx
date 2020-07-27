import styled from "styled-components";
import { theme, media } from "@styles";

const { headerMargin } = theme;

export const ContentHeaderCSS = styled.div`
  h2 {
    color: white;
    margin-bottom: ${headerMargin.small};
  }

  p {
    color: white;
  }
  .social-media-container {
    margin-bottom: 0.5rem;
    a {
      margin-right: 0.5rem;

      svg {
        path {
          fill: white;
        }
      }
    }
  }

  ${media.bigDesktop`
    h2 {
      color: black;
    }

    p {
      color: black;
    }
  `}
`;
