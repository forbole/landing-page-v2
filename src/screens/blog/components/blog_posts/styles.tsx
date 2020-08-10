import styled from "styled-components";
import { mixins } from "@styles";

export const BlogPostCSS = styled.div`
  ${mixins.mobilePadding}
  padding-top: 4rem;
  display: grid;
  grid-gap: 20px;
`;
