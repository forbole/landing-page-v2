import styled from "styled-components";
import { mixins, theme, media } from "@styles";

const { colors } = theme;

export const OpportunitiesCSS = styled.div`
  ${mixins.mobileLastContainerPadding}
  background: ${colors.gray100};

  ${media.bigDesktop`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const HeaderCSS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-weight: 500;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  p {
    text-align: center;
  }

  ${media.bigDesktop`
    margin-bottom: 3rem;
    h3 {
      font-size: 2.5rem;
    }
  `}
`;

export const GridCSS = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(100px, 1fr));
  grid-gap: 15px;
  margin-top: 1rem;

  ${media.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.bigDesktop`
    grid-gap: 30px;
    grid-template-columns: repeat(3, 1fr);
  `}
`;
