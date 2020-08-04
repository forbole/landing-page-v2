import styled from "styled-components";
import { MaxWidthContainerCSS as MaxWidthCSS } from "@styles/components";
import { mixins, media } from "@styles";

export const TeamCSS = styled.div`
  ${mixins.mobilePadding}

  ${media.bigDesktop`
    ${mixins.flexCenter}
  `}
`;

export const TeamHeadingContainerCSS = styled.div`
  margin-bottom: 1rem;
  h3 {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  ${media.bigDesktop`
    padding-right: 2rem;

    h3 {
      font-size: 3.5rem;
    }
  `}
`;

export const TeamGridCSS = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-gap: 20px 12px;

  ${media.tablet`
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  `}

  ${media.bigDesktop`
    min-width: 70%;
  `}
`;

export const MaxWidthContainerCSS = styled(MaxWidthCSS)`
  ${media.bigDesktop`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
