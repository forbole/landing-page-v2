import styled from "styled-components";
import { mixins, media } from "@styles";

const MaxWidthContainerCSS = styled.div`
  ${media.bigDesktop`
    ${mixins.desktopMaxWidth}
    width: 100%;
  `}
`;

export default MaxWidthContainerCSS;

