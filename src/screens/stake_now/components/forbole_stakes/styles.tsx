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
  min-height: 90vh;
  background-image: url("/static/images/assets/stake-now-background.png");
  background-color: rgba(27, 27, 27, 1);
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
    border-top: 1px solid rgb(71, 83, 117);
    margin: 1em 0;
    padding: 0;
  }

  h1 {
    margin-bottom: 0;
    font-size: 2.5rem;
    color: white;
    font-weight: 500;
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
    background-image: url("/static/images/assets/stake-now-background.png");
    background-color: rgba(27, 27, 27, 1);
    // background-position: center 200px, center center;
    background-size: 100%;
    background-repeat: no-repeat;
    // height: 40vh;
    min-height: 70vh;

    .stats-hr {
      display: none;
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
    margin-top: -8rem;
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
