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
    padding: 2rem;
    img {
      height: 225px;
      width: 433px;
    }
    .content { 
      display: block;
      margin: 2rem;
      z-index: 1;
      margin: -1rem;
      // width: 15rem;
      background: white;
      border-radius: 0.5rem;
      z-index: 1;
      -webkit-filter: drop-shadow(1rem 1rem 1rem rgba(0, 0, 0, 0.2));
      filter: drop-shadow(0rem 0rem 0.5rem rgba(0, 0, 0, 0.2));
    }
    .content:hover {
      cursor: pointer;
      z-index: 2;
      box-shadow: 0px 8px 13px 3px rgba(214, 214, 214, 0.45);
    }
    background: none;
  `}
`;
