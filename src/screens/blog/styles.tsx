import styled from "styled-components";
import { media, mixins, theme } from "@styles";

const { colors } = theme;

export const BlogCSS = styled.div`
  ${media.bigDesktop`
    ${mixins.flexCenter}
  `}
`;

export const MaxWidthContainerCSS = styled.div`
  width: 100%;
  max-width: 1920px;

  ${media.bigDesktop`
    ${mixins.mobileHorizontalPadding}
    ${mixins.mobileBottomPadding}
    margin-top: 7.5rem;
    display: flex;
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
