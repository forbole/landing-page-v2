import styled from "styled-components";
import { media, theme } from "@styles";

const { colors } = theme;

export const OpeningCSS = styled.div`
  background: white;
  padding: 1.5rem 1rem;
  box-shadow: 0px 10px 40px rgb(41 41 42 / 10%);
  border-radius: 0.5rem;

  h3 {
    margin-bottom: 1.8rem;
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

    a {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }

    .see-more {
      display: block;
      margin-top: 1.5rem;
      margin-left: -1rem;
      margin-right: -1rem;
      margin-bottom: -1.5rem;
      padding: 0.5rem 1rem;
      transition: 0.3s;
      display: flex;
      align-items: center;
      color: ${colors.forboleRed};

      svg {
        margin-left: 0.5rem;
        path {
          fill: ${colors.forboleRed};
        }
      }
    }

    &:hover {
      .see-more {
        background: ${colors.forboleRed};
        color: ${colors.white};
        border-radius: 0 0 0.5rem .5rem;

        svg {
          path {
            fill: ${colors.white};
          }
        }
      }
    }
  `}
`;
