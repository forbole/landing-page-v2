import styled from "styled-components";
import { theme, media } from "@styles";

const { colors } = theme;

export const PostCSS = styled.div`
  .image-container {
    > div {
      position: unset !important;
    }

    .image {
      border-radius: 0.5rem;
      object-fit: cover;
      width: 100% !important;
      position: relative !important;
      // height: 2rem !important;
      min-height: 150px !important;
    }
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
      font-size: 0.875rem;
      font-weight: 300;
    }
  }

  .content {
    padding: 0;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgba(100, 100, 100, 1);
    font-weight: 300;
    font-size: 1rem;
    a {
      padding-left: 0.3rem;
      color: rgba(13, 106, 255, 1);
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
    .image-container {
      .image {
        height: 225px !important;
      }
    }
  `}
`;
