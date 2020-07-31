import styled from "styled-components";
import { media } from "@styles";

export const ForboleCSS = styled.div`
  padding-bottom: 1rem;
  img {
    height: 16px;
    width: 83px;
  }
  p {
    font-size: 14px;
    font-weight: 300;
  }

  ${media.bigDesktop`
  text-align: left;
  margin-top: 0.5rem;
  width: 10vw; 
  margin-bottom: 1rem;
  img {
    height: 30%;
    width: 70%;
  }`}
`;
