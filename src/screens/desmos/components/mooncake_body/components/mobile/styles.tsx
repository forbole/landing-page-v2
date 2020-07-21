import styled from "styled-components";
import { theme, media } from "@styles";

export const BodyCSS = styled.div`
  padding: 1rem 0;

  ${media.bigDesktop`
    display: none;
  `}
`;
