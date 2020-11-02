import styled from "styled-components";
import { media } from "@styles";

export const DesktopFooterCSS = styled.div`
  display: none;
  ${media.bigDesktop`
  background-color: rgba(26, 26, 44, 1);
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    max-width: 1300px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .desktopFooter-left {
    padding-right: 7rem;
    width: 100%;
  }
  `}
`;
