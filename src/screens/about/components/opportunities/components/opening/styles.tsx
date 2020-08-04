import styled from "styled-components";
import { media, theme } from "@styles";

const { colors } = theme;

export const OpeningCSS = styled.div`
  background: white;
  padding: 1.5rem 1rem;

  h3 {
    margin-bottom: 0.6em;
    font-weight: 500;
  }

  .see-more {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }

  a {
    color: black;
  }

  ${media.bigDesktop`
    .header-content {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }

    .see-more {
      display: block;
      margin-top: 1rem;
      margin-left: -1rem;
      margin-right: -1rem;
      margin-bottom: -1.5rem;
      padding: 0.5rem;
      transition: 0.3s;
      display: flex;
      align-items: center;

      svg {
        margin-left: 0.5rem;
        path {
          fill: rgba(0,0,0,.87);
        }
      }
    }

    &:hover {
      .see-more {
        background: ${colors.red};
        color: white;

        svg {
          path {
            fill: white;
          }
        }
      }
    }
  `}
`;
