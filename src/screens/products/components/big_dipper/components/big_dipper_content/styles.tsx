import styled from "styled-components";
import { mixins, theme, media } from "@styles";

const { colors } = theme;

export const BigDipperContentCSS = styled.div`
  ${mixins.mobilePadding}
  ${mixins.flexCenter}
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
  .bdbg {
    position: absolute;
    width: 144px;
    height: 144px;
    right: 1rem;
    top: 0.1rem;
    z-index: -1;
  }
  .bd {
    border-radius: 0.5rem;
    box-shadow: 0px 10px 40px 0px rgba(41, 41, 42, 0.1);
    width: 255px;
    height: 189.79px;
  }
  h1 {
    font-weigth: 400;
    color: ${colors.forboleRed};
    font-size: 2rem;
    font-weight: 400;
    padding-top: 1rem;
  }
  li {
    margin-bottom: 1rem;
    font-weight: 400;
    line-height: 28px;
  }
  a {
    display: flex;
    align-items: center;
    color: ${colors.forboleRed};
    svg {
      margin-left: 0.8rem;
      path {
        fill: ${colors.forboleRed};
      }
    }
  }
  ${media.tablet`
  .bd {
    width: 450px;
    height: auto;
  }
  .bdbg {
    width: 482.08px;
    height: 482.08px;
    right: 1rem;
    top: 0rem;
  }
  p {
    font-size: 1rem;
  }
  h1 {
    font-size: 3rem;
  }
  li {
    font-size: 1rem;
  }
  `}
  ${media.bigDesktop`
  ${mixins.flexCenter}
  height: calc(100vh - 25rem);
  padding: 0;
  .desktopWrapper {
    ${mixins.desktopMaxWidth}
    ${mixins.flexCenter}
    justify-content: space-between;
    flex-direction: row-reverse;
    width: 100%;
    display: flex;
  }
  p {
    display: flex;
    justify-content: flex-start;
    font-weight: 100;
    font-size: 1rem;
  }
  img {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 0;    
      max-width: none;
      height: auto;
  }
  .bdbg {
    width: 482.08px;
    height: 482.08px;
    right: 5rem;
    top: 2rem;
  }
  .bd {
    width: 525px;
    height: 390.74px;
  }
  h1 {
    font-size: 4rem;
    font-weight: 500;
  }
  a {
    padding-top: 1.5rem;
  }
  .image {
    padding: 0;
  }
  .content {
    margin-right: 7rem;

    p:last-child {
      margin-bottom: 0;
    }
  }
  `}
`;
