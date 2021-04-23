import styled from "styled-components";
import { MaxWidthContainerCSS as MaxWidthCSS } from "@styles/components";
import { media } from "@styles";

export const PPCSS = styled.div`
  padding: 4rem 1.5rem;
  .usage {
    padding-bottom: 2rem;
  }
  .li {
    padding-bottom: 1rem;
  }
  .email {
    list-style: none;
  }
  ${media.bigDesktop`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 5rem 0;
  `}
`;

export const MaxWidthContainerCSS = styled(MaxWidthCSS)`
  margin: auto;
  p {
    margin-bottom: 0;
    padding-bottom: 1rem;
  }
`;
