import styled from "styled-components";
import { media } from "@styles";

export const SingleDetailCSS = styled.div`
  margin: 1rem 0;

  h3 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    font-size: 1.3rem;
  }

  ${media.bigDesktop`
    h3 {
      font-size: 1.1rem;
    }
  `}
`;
