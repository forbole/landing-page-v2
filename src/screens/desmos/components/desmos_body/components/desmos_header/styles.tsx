import styled from "styled-components";
import { theme, media } from "@styles";

const { headerMargin } = theme;

export const ContentHeaderCSS = styled.div`
  h2 {
    color: white;
    margin-bottom: ${headerMargin.small};
  }

  p {
    color: white;
  }

  ${media.bigDesktop`
    h2 {
      color: black;
    }

    p {
      color: black;
    }
  `}
`;
