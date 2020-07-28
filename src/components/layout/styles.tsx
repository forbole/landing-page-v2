import styled from "styled-components";
import { media } from "@styles";

export const MainContentCSS = styled.div`
  padding: 0 1rem 3rem;

  ${media.bigDesktop`
    padding: 0;
    display: flex;
    justify-content: center;

    & > * {
      width: 100%;
    }
  `}
`;
