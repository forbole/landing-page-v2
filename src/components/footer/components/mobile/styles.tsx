import styled from "styled-components";
import { media, mixins } from "@styles";

export const MobileFooterCSS = styled.div`
  ${mixins.mobilePadding}
  background-color: rgba(27, 27, 27, 1);
  list-style-type: none;
  text-align: left;
  width: 100%;
  ${media.bigDesktop`
    display: none;
  `}
`;
