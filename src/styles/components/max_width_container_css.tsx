import styled from "styled-components";
import { media } from "@styles";

const MaxWidthContainerCSS = styled.div`
  ${media.bigDesktop`
    max-width: 1200px;
    width: 100%;
  `}
`;

export default MaxWidthContainerCSS;
