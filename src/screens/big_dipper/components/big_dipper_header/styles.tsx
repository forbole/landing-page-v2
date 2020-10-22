import styled from "styled-components";
import { mixins, theme, media } from "@styles";

const { colors } = theme;

export const BigDipperHeaderCSS = styled.div`
  ${mixins.mobileHorizontalPadding}
  ${mixins.mobileBottomPadding}
  padding-top: 5rem;
  background-color: ${colors.red};
  display: flex;
  flex-direction: column;
  width: 100%;
  a {
    color: ${colors.white};
    padding-right: 0.5rem;
  }
  .socialMedia {
    padding-top: 1rem;
    a {
      padding-right: 1rem;
    }
  }
  h1 {
    font-size: 2rem;
  }
  h1,
  h2,
  span {
    color: ${colors.white};
    margin-bottom: 0.5rem;
    font-weight: 100;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  svg > path {
    fill: white;
  }
  ${media.tablet`
  h1 {
    font-size: 3rem;
  }
  `}
  ${media.bigDesktop`
  ${mixins.flexCenter}
  height: 25rem;
  .desktopWrapper {
    ${mixins.desktopMaxWidth}
    flex-direction: column;
    width: 100%;
    display: flex;
  }
  h1 {
    font-size: 3.75rem;
  }

  h2 {
    font-size: 2.5rem;
  }
  h1, h2 {
    ${mixins.desktopMaxWidth}
    margin: 0;
  }

  svg {
    width: 1.875rem;
    height: auto;
  }

  svg path:hover {
    fill: rgba(250, 250, 250, 1);
    cursor: pointer;
  }
  span {
      margin-bottom: 0;
      font-size: 1.5rem;
  }
  span:hover {
    a {
        color: ${colors.black};
    }
    svg > path {
        fill: ${colors.black};
    }
  }
  .wrapper {
    ${mixins.flexBetween}
      .socialMedia {
          padding-top: 0;
      }
  }
  `}
`;
