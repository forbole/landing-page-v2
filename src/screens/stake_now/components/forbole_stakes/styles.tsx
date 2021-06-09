import styled from "styled-components";
import { mixins, media, theme } from "@styles";

const { colors } = theme;

export const StakeNowContainerCSS = styled.div`
  ${media.bigDesktop` 
    min-height: 100vh;
    background: ${colors.white};
  `}
`;

export const ForboleStakesCSS = styled.div`
  ${mixins.mobileHorizontalPadding};
  min-height: 35vh;
  background-image: url("/static/images/assets/stake-now-background.png");
  background-color: rgba(27, 27, 27, 1);
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: inherit;
  flex-direction: column;
  padding-top: 6rem;
  padding-bottom: 5rem;

  p {
    color: ${colors.white};
    font-size: 1rem;
  }

  hr {
    display: block;
    border: 0;
    border-top: 1px solid rgb(71, 83, 117);
    margin: 1em 0;
    padding: 0;
  }

  h1 {
    margin-bottom: 0;
    font-size: 2rem;
    color: white;
    font-weight: 500;
    display: flex;
  }
  .ui.loader {
    position: relative !important;
    display: inline-block;
  }

  .ui.mini.loader {
    top: 10px;
    left: 6px;
  }

  .ui.tiny.loader {
    top: 8px;
    left: 8px;
  }

  .ui.medium.loader {
    top: 22px;
    left: 15px;
  }

  .ui.loader.loader.loader:after {
    border-color: white;
  }

  ${media.bigDesktop`
    padding-top: 12rem;
    height: 45rem;
    background-image: url("/static/images/assets/stake-now-background.png");
    background-color: rgba(27, 27, 27, 1);
    background-position: 50% 50%;
    // background-position: center 200px, center center;
    background-size: cover;
    background-repeat: no-repeat;
    p {
      font-size: 1.5rem;
    }
    h1 {
      font-size: 4rem;
    }
  `}
`;

export const FlexContainerCSS = styled.div`
  z-index: 5;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${media.bigDesktop`
    ${mixins.desktopMaxWidth}
    flex-direction: row;
    justify-content: center;
    margin: auto;
    margin-top: -18rem;
  `}
`;

export const CarouselDesktopContainerCSS = styled.div`
  width: 100%;
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
