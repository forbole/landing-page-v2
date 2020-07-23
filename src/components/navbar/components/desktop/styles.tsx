import styled from "styled-components";
import { media } from "@styles";

export const DesktopNavCSS = styled.div`
  display: none;
  ${media.bigDesktop`
    display: block;
  `}
`;
