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
    img {
      height: 444px;
    }
  `}
`;
