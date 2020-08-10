import styled from "styled-components";
import { MaxWidthContainerCSS as MaxWidthCSS } from "@styles/components";
import { media, mixins } from "@styles";

export const BlogCSS = styled.div`
  ${mixins.flexCenter}
`;

export const MaxWidthContainerCSS = styled(MaxWidthCSS)`
  width: 100%;

  ${media.bigDesktop`
    ${mixins.mobileHorizontalPadding}
    ${mixins.mobileBottomPadding}
    margin-top: 7.5rem;
    display: flex;
  `}
`;

export const SideCSS = styled.div`
  ${media.bigDesktop`
    width: 30%;
    margin-left: 2rem;
  `}
`;
