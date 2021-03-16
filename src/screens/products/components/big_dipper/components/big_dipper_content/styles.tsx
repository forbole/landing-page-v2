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
  .image {
    padding: 1rem;
    width: 299px;
    height: 200px;
  }
  .bdbg {
    position: absolute;
    width: 144px;
    height: 144px;
    right: 5px;
    top: 1251px;
    z-index: -1;
  }
  .bd {
    border-radius: 0.5rem;
    // -webkit-filter: drop-shadow(1rem 1rem 2rem rgba(0, 0, 0, 0.2));
    // filter: drop-shadow(1rem 1rem 2rem rgba(0, 0, 0, 0.2));
    box-shadow: 0px 10px 40px 0px rgba(41, 41, 42, 0.1);
    z-index: 100;
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
  }
  a {
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    color: ${colors.forboleRed};
    svg {
      margin: 0.3rem;
      path {
        fill: ${colors.forboleRed};
      }
    }
  }
  ${media.tablet`
  .image {
    padding: 2rem;
  }
  p {
    font-size: 1rem;
  }
  `}
  ${media.bigDesktop`
  ${mixins.flexCenter}
  ${mixins.desktopBottomPadding}
  padding-top: 5rem;
  min-height: 45rem;
  height: calc(100vh - 25rem);
  .desktopWrapper {
    ${mixins.desktopMaxWidth}
    ${mixins.flexCenter}
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
