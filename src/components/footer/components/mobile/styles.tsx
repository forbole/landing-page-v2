import styled from "styled-components";
import { media, theme, mixins } from "@styles";

const { colors } = theme;

export const MobileFooterCSS = styled.div`
  ${mixins.mobilePadding}
  color: ${colors.offwhite};
  background-color: rgba(26, 26, 44, 1);
  list-style-type: none;
  text-align: left;
  width: 100%;
  .ui {
    margin-bottom: 1em;
  }
  hr {
    margin-bottom: 1em;
    opacity: 0.3;
  }
  li {
    margin-bottom: 1em;
  }
  h2 {
    font-weight: 250;
  }
  ${media.bigDesktop`
    display: none;
  `}
`;
