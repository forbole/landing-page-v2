import styled from "styled-components";
import { media } from "@styles";

export const SocialMediaCSS = styled.div`
  svg path:hover {
    fill: rgba(250, 250, 250, 1);
    cursor: pointer;
  }
  a {
    padding-right: 1rem;
  }

  ${media.bigDesktop`
    svg {
      height: 25px;
      width: 25px;
    }
`}
`;
