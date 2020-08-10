import styled from "styled-components";
import { MaxWidthContainerCSS as MaxWidthCSS } from "@styles/components";
import { media, mixins } from "@styles";

export const BlogCSS = styled.div`
  ${mixins.flexCenter}
`;

export const MaxWidthContainerCSS = styled(MaxWidthCSS)`
  width: 100%;
`;
