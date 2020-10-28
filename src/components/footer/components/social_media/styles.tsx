import styled from "styled-components";
import { media } from "@styles";

export const SocialMediaCSS = styled.div`
  svg path {
    transition: 0.3s;
  }

  a {
    padding-right: 1rem;
    &:hover {
      cursor: pointer;
      svg path {
        fill: rgba(250, 250, 250, 1);
      }
    }
  }

  ${media.bigDesktop`
    svg {
      height: 25px;
      width: 25px;
    }
`}
`;
