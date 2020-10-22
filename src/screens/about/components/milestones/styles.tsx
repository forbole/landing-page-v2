import styled from "styled-components";
import { mixins, media } from "@styles";

export const MilestonesCSS = styled.div`
  ${mixins.mobilePadding}
  background: rgba(244, 251, 255, 1);

  h3 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  ${media.bigDesktop`
    ${mixins.flexCenter}
    min-height: 100vh;
    h3 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
  `}
`;

export const MilestonesGridCSS = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;

  ${media.tablet`
    margin-top: 1rem;
  `}

  ${media.bigDesktop`
    grid-template-columns: repeat(2, 1fr);
  `}
`;
