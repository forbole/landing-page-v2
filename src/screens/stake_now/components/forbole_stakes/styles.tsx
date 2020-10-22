import styled from "styled-components";
import { mixins, theme, media } from "@styles";

const { colors } = theme;

export const ForboleStakesCSS = styled.div`
  ${mixins.mobileHorizontalPadding};
  min-height: 90vh;
  background-image: url("static/images/assets/stake-now-bg.svg");
  background-position: center center;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 4rem;
  padding-bottom: 5rem;

  p {
    color: white;
  }

  hr {
    display: block;
    border: 0;
    border-top: 1px solid ${colors.gray600};
    margin: 1em 0;
    padding: 0;
  }

  h1 {
    margin-bottom: 0;
    font-size: 2.5rem;
    color: white;
    font-weight: 500;
  }

  ${media.bigDesktop`
    background-image:  url("static/images/assets/stake-now-elements.svg"), url("static/images/assets/stake-now-bg.svg");
    background-position: center 200px, center center;
    background-repeat: no-repeat;
    min-height: 100vh;

    .stats-hr {
      display: none;
    }
  `}
`;

export const FlexContainerCSS = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${media.bigDesktop`
    ${mixins.desktopMaxWidth}
    flex-direction: row;
    justify-content: center;
  `}
`;

export const StakesDetailsContainerCSS = styled.div`
  width: 100%;

  ${media.bigDesktop`
    width: 35%;
  `}
`;

export const ChartContainerCSS = styled.div`
  margin: 1rem 0;

  ${media.bigDesktop`
    margin: 1rem 4rem 1rem 0rem;
    flex: 1;
    max-width: 450px;
    z-index: 5;
  `}
`;
