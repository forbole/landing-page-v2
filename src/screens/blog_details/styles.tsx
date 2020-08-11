import styled from "styled-components";
import { MaxWidthContainerCSS as MaxWidthCSS } from "@styles/components";
import { media, mixins } from "@styles";

export const BlogDetailsCSS = styled.div`
  flex: 1;
  ${media.bigDesktop`
    display: flex;
    justify-content: center;
  `}
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

export const ContentCSS = styled.div`
  ${mixins.mobileLastContainerPadding}
  padding-top: 4rem;

  h3 {
    font-weight: 400;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .tags-container {
    margin-top: 1rem;
  }

  ${media.bigDesktop`
    padding-top: 0;

    h3 {
      font-size: 1.7rem;
    }
    .tags-container {
      margin-top: 2rem;
      width: 60%;
    }
  `}
`;

export const FlexContainerCSS = styled.div`
  .social-media-container {
    margin-bottom: 1rem;
  }
  ${media.tablet`
      margin-bottom: 1rem;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;

      .social-media-container {
        margin-bottom: 0;
      }
    `}
`;
