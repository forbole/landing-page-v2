import styled from "styled-components";
import { mixins, media } from "@styles";

export const BlogPostCSS = styled.div`
  ${mixins.mobilePadding}
  padding-top: 4rem;
  display: grid;
  grid-gap: 20px;

  ${media.bigDesktop`
    padding: 0;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    grid-gap: 30px 20px;
    div.main {
      grid-column: 1 / span 2;
    }
  `}
`;

export const BlogContainerCSS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  flex: 1;

  .ui.pagination.menu {
    display: none;
    margin: 2rem 0;
  }

  ${media.tablet`
    .ui.pagination.menu {
      display: inline-flex;
    }
  `}
`;
