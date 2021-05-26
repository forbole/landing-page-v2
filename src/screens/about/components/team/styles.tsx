import styled from "styled-components";
import { MaxWidthContainerCSS as MaxWidthCSS } from "@styles/components";
import { mixins, media } from "@styles";

export const TeamCSS = styled.div`
  padding: 0rem 0rem 5rem;
  ${media.bigDesktop`
    ${mixins.flexCenter}
    padding-bottom: 8rem;
  `}
`;

export const TeamHeadingContainerCSS = styled.div`
  padding: 2.5rem 1.5rem 1.5rem;
  h3 {
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.75rem;
  }

  ${media.bigDesktop`
    h3 {
      margin-bottom: 0.5rem;
      font-weight: 200;
      font-size: 2.5rem;
      // padding: 2rem 1rem 0rem;
    }
    p {
      margin: 0;
    }
  `}
`;

export const TeamGridCSS = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-gap: 28px 28px;
  padding: 1rem;

  ${media.tablet`
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  `}

  ${media.bigDesktop`
    min-width: 90%;
    padding: 0;
  `}
`;

export const MaxWidthContainerCSS = styled(MaxWidthCSS)`
  ${media.bigDesktop`
    display: flex;
    justify-content: center;
    flex-direction: column;
  `}
`;
