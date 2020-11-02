import styled from "styled-components";
import { theme, media } from "@styles";

const { headerMargin, padding } = theme;

export const DecentralizedCSS = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  margin-bottom: 0;

  ${media.tablet`
    font-size: 1.5rem;
  `};

  ${media.bigDesktop`
    font-size: 2rem;
  `};
`;

export const MooncakeBodyCSS = styled.div`
  margin-bottom: ${padding.desktopVertical};

  h3 {
    font-weight: 500;
    margin-bottom: ${headerMargin.small};
    font-size: 2rem;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }

  ${media.bigDesktop`
    h3 {
      font-size: 3rem;
    }

    p {
      font-size: 1rem;
    }
  `};
`;

export const ButtonsCSS = styled.div`
  display: flex;
  align-items: center;

  .resize {
    margin-left: 0.4rem;
    svg {
      width: 140px;
      height: auto;
    }
  }
`;
