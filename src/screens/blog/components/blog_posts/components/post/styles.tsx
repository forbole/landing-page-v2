import styled from "styled-components";
import { theme, media } from "@styles";

const { colors } = theme;

export const PostCSS = styled.div`
  .image-container {
    padding-bottom: 1rem;
    > div {
      position: unset !important;
    }

    .image {
      display: block;
      position: relative !important;
      border-radius: 0.5rem;
      height: 200px !important;
      min-height: 150px !important;
      width: 100% !important;
      object-fit: cover;
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
      .content {
        a > .image-container {
            .image {
              height: 350px !important;
            }
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
