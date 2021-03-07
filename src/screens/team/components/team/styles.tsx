import styled from "styled-components";
import { MaxWidthContainerCSS as MaxWidthCSS } from "@styles/components";
import { mixins, media } from "@styles";

export const TeamCSS = styled.div`
  ${media.bigDesktop`
    ${mixins.flexCenter}
    padding-top: 3rem;
    padding-bottom: 8rem;
  `}
`;

export const TeamHeadingContainerCSS = styled.div`
  margin-bottom: 1rem;
  h3 {
    margin-bottom: 0.5rem;
    font-weight: 200;
  }

  ${media.bigDesktop`
    h3 {
      font-size: 3.1rem;
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
