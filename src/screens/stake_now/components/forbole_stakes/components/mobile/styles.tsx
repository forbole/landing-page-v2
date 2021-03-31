import styled from "styled-components";
import { mixins, media } from "@styles";

export const BlogPostCSS = styled.div`
  ${mixins.mobilePadding}
  padding-top: 1rem;
  display: grid;
  grid-gap: 1rem;
  ${media.bigDesktop`
   display: none;
  `}
`;
