import styled from "styled-components";
import { media, mixins } from "@styles";

export const CosmosContentCSS = styled.div`
  padding: 1.5rem 1rem;
  p {
    font-size: 1rem;
    margin-bottom: 2em;
  }
  ${media.tablet`
  padding: 3rem;
p {
    font-size: 2rem;
}`}
  ${media.bigDesktop`
p {
    ${mixins.desktopMaxWidth}
    width: 100%;
    font-weight: 100;
    padding-left: 1.5rem;
  }`}
`;
