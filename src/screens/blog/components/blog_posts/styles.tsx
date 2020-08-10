import styled from "styled-components";
import { mixins, media } from "@styles";

export const BlogPostCSS = styled.div`
  ${mixins.mobilePadding}
  padding-top: 4rem;
  display: grid;
  grid-gap: 20px;

  ${media.bigDesktop`
    grid-template-columns: repeat(2, 1fr);

    div.main {
      grid-column: 1 / span 2;
    }
  `}
`;
