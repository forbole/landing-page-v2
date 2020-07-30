import styled from "styled-components";
import { theme, media } from "@styles";

const { headerMargin, padding } = theme;

export const DecentralizedCSS = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  margin-bottom: 0;

  ${media.bigDesktop`
    font-size: 1.3rem;
  `};
`;

export const MooncakeBodyCSS = styled.div`
  margin-bottom: ${padding.desktopVertical};

  h3 {
    font-weight: 500;
    margin-bottom: ${headerMargin.small};
  }

  p {
    font-size: 0.9rem;
  }

  ${media.bigDesktop`
    h3 {
      font-size: 2rem;
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
