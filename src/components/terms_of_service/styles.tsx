import styled from "styled-components";
import { media } from "@styles";

export const TermsOfServiceCSS = styled.div`
  padding: 5rem 2rem;
  ${media.bigDesktop`
  padding: 1rem;
  max-height: 80vh;
  overflow-y: auto;
  h3 {
    font-weight: 400;
    text-align: center;
  }

  p {
    text-align: center;
  }`}
`;
