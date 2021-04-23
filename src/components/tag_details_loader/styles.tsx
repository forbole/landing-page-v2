import styled from "styled-components";
import { media } from "@styles";

export const FlexCSS = styled.div`
  display: flex;
  justify-items: center;
`;

export const ContentCSS = styled.div`
  flex-direction: column;
  width: 1000px;
  .topLoader {
    display: none;
  }
  ${media.bigDesktop`
  .topLoader {
    display: block;
  }
  `}
`;

export const SideCSS = styled.div`
  padding-top: 4rem;
  display: none;
  ${media.bigDesktop`
    display: block;
  `}
`;
