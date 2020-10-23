import styled from "styled-components";
import { media, mixins } from "@styles";

export const NetworkContentCSS = styled.div`
  ${mixins.mobileLastContainerPadding}
  flex: 1;

  p {
    font-size: 1rem;
    margin-bottom: 2em;
    white-space: pre-wrap;
  }

  ${media.tablet`
    padding: 3rem;
  `}

  ${media.bigDesktop`
    ${mixins.desktopBottomPadding}
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 3rem 0;

    .wrapper {
      ${mixins.desktopMaxWidth}
      width: 100%;
    }

    p {
        justify-content: flex-start;
        width: 100%;
        font-size: 1rem;
      }
  `}
`;
