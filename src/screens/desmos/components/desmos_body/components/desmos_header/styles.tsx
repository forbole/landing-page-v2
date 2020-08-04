import styled from "styled-components";
import { theme, media } from "@styles";
const { headerMargin, colors } = theme;

export const ContentHeaderCSS = styled.div`
  h2 {
    color: white;
    margin-bottom: ${headerMargin.small};
    font-weight: 400;
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
    font-size: 2rem;
  }

  p {
    color: black;
  }

  .social-media-container {
    margin-bottom: 0;
    a {
      svg {
        path {
          fill: ${colors.gray600};
          transition: 0.2s;
        }
      }
      &:hover {
        svg {
          path {
            fill: ${colors.orange};
          }
        }
      }
    }
  }
`}
`;
