import styled from "styled-components";
import { media } from "@styles";

export const ForboleCSS = styled.div`
  padding-bottom: 1rem;
  img {
    height: 16px;
    width: 83px;
  }
  p {
    font-weight: 300;
  }

  ${media.bigDesktop`
  img {
    height: 30px;
    width: 125px;
  }
  p {
    font-size: 0.8rem;
  }
  `}
`;
