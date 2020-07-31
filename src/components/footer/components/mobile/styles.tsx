import styled from "styled-components";
import { media, theme, mixins } from "@styles";

const { colors } = theme;

export const MobileFooterCSS = styled.div`
  ${mixins.mobilePadding}
  background-color: rgba(26, 26, 44, 1);
  list-style-type: none;
  text-align: left;
  width: 100%;
  bottom: 0;
  ${media.bigDesktop`
    display: none;
  `}
`;
