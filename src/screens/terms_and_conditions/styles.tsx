import styled from "styled-components";
import { MaxWidthContainerCSS as MaxWidthCSS } from "@styles/components";
import { media } from "@styles";

export const TNCCSS = styled.div`
  padding: 4rem 1.5rem;
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
`;
