import styled from "styled-components";
import { theme, media } from "@styles";

const { colors } = theme;

export const PostCSS = styled.div`
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
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
  ${media.tablet`
    img {
      height: 300px;
    }
  `}
  ${media.bigDesktop`
    padding: 1rem;
    height: 500px;
    transition: 0.5s ease;

    &:hover {
      .content {
        cursor: pointer;
        z-index: 0;
        margin: 0;
        border-radius: 0rem;
        border-bottom: 5px solid ${colors.red};
        -webkit-filter: none;
        filter: none;
      }
    }

    img {
      height: 225px;
      width: 433px;
      border-radius: 0.1rem;
      -webkit-filter: drop-shadow(1rem 1rem 1rem rgba(0, 0, 0, 0.2));
      filter: drop-shadow(0rem 0rem 0.5rem rgba(0, 0, 0, 0.2));
    }
    .content {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      margin: 2rem;
      z-index: 1;
      margin: -4rem 1rem 0;
      background: white;
      border-radius: 0.3rem;
      -webkit-filter: drop-shadow(1rem 1rem 1rem rgba(0, 0, 0, 0.2));
      filter: drop-shadow(0rem 0rem 0.5rem rgba(0, 0, 0, 0.2));
      transition: 0.3s ease;
      min-height: 245px;
      border-bottom: 5px solid transparent;

      h3 {
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 1rem;
        line-height: 1.5rem;
      }

      .date {
        padding-top: 2rem;
      }
    }
    background: none;
  `}
`;
