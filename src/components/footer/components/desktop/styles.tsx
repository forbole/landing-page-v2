import styled from "styled-components";
import { media, theme } from "@styles";

const { colors } = theme;

export const DesktopFooterCSS = styled.div`
  display: none;
  ${media.bigDesktop`
  color: ${colors.offwhite};
  background-color: rgba(26, 26, 44, 1);
  padding: 2rem;
  list-style-type: none;
  width: 100%;
  display: flex;
  justify-content: center;
  .desktopFooter-left {
    padding-left: 4rem;
    padding-right: 5rem;
  }
  p {
    font-size: 11px;
    font-weight: 300;
  }
  ul li {
    margin: 10px;
  }

  ul li a {
    color: #fff;
    text-decoration: none;
  }

  hr {
    margin: 0px 0px 0px 25px;
  }
  `}
`;
