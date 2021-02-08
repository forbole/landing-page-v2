import styled from "styled-components";
import { MaxWidthContainerCSS as MaxWidthCSS } from "@styles/components";
import { mixins, theme, media } from "@styles";

const { colors } = theme;

export const MaxWidthContainerCSS = styled(MaxWidthCSS)`
  width: 100%;

  ${media.bigDesktop`
    ${mixins.mobileHorizontalPadding}
    ${mixins.mobileBottomPadding}
    margin-top: 7.5rem;
    display: flex;
    max-width: 1440px;
  `}
`;

export const SideCSS = styled.div`
  .tags-container {
    ${mixins.mobilePadding}
    padding-top: 1.5rem;
  }

  ${media.bigDesktop`
    width: 30%;
    min-width: 300px;
    margin-left: 2rem;

    .tags-container {
      margin-top: 2rem;
      border: solid 1px ${colors.gray100};
    }
  `}
`;

export const BlogCSS = styled.div`
  ${media.bigDesktop`
     ${mixins.flexCenter}
  `}
`;
