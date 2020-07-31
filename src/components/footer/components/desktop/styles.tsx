import styled from "styled-components";
import { media, mixins } from "@styles";

export const DesktopFooterCSS = styled.div`
  display: none;
  ${media.bigDesktop`
  ${mixins.flexBetween}
  width: 100%;
  bottom: 0;
  background-color: rgba(26, 26, 44, 1);
  padding: 2rem 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  .desktopFooter-left {
    padding-right: 7rem;
  }
  `}
`;
