import styled from "styled-components";
import { theme, media } from "@styles";

const { colors } = theme;

export const PostCSS = styled.div`
  .image-container {
    height: 200px;
  }
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
  h3 {
    font-weight: 500;
    margin-bottom: 0;
    font-size: 1.25rem;
  }
  a {
    color: black;
    display: block;
    height: 100%;
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
    padding: 0.5rem;
    background: white;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  ${media.tablet`

  `}
  ${media.bigDesktop`
    padding: 1rem;
    height: 500px;
    transition: 0.5s ease;

    a {
      display: flex;
      flex-direction: column;
    }

    &:hover {
      .content {
        cursor: pointer;
        margin: 0;
        border-bottom: 5px solid ${colors.red};
        border-radius: 0;
      }
    }

    img {
      border-radius: 0.1rem;
    }
    .content {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      margin: -3rem 1rem;
      border-radius: 0.3rem;
      -webkit-filter: drop-shadow(1rem 1rem 1rem rgba(0, 0, 0, 0.2));
      filter: drop-shadow(0rem 0rem 0.5rem rgba(0, 0, 0, 0.2));
      transition: 0.3s ease;
      min-height: 245px;

      h3 {
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
    background: none;
  `}
`;
