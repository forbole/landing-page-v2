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
  top: 5219px;
  left: 0px;
  width: 100%;
  height: 19vh;
  display: flex;
  justify-content: center;

  .desktopFooter-left {
    margin-left: 4vw;
    margin-right: 5vw;
  }
  p {
    font-size: 11px;
    font-weight: 350;
    height: 1rem;
    width: max-content;
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
