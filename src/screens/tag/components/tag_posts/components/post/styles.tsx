import styled from "styled-components";
import { theme, media } from "@styles";

const { colors } = theme;

export const PostCSS = styled.div`
  p {
    display: none;
  }
  img {
    // height: 150px;
    min-height: 150px;
    width: 100%;
    object-fit: cover;
  }

  h4 {
    font-weight: 400;
    margin-bottom: 0.1rem;
    color: ${colors.gray400};
  }

  h3 {
    font-weight: 500;
    margin-bottom: 0;
  }

  a {
    color: black;
  }

  p {
    margin-bottom: 0;

    &.date {
      color: ${colors.gray600};
      font-size: 0.8rem;
      font-weight: 300;
    }
  }

  .content {
    padding: 0.5rem;
  }

  span {
    display: flex;
    align-items: center;
    img {
      margin-right: 0.3rem;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      min-height: 0px;
      object-fit: cover;
    }
  }

  ${media.bigDesktop`
    &.main {
      img {
        height: 350px;
      }
      span {
        img {
          height: 25px;
        }
      }
    }
    img {
      height: 225px;
    }
  `}
`;
