import styled from "styled-components";
import { mixins, theme, media } from "@styles";

const { colors } = theme;

export const DesmosContentCSS = styled.div`
  .image-container {
    width: 100%;
    padding-bottom: 1rem;
    > div {
      position: unset !important;
    }

    .image {
      object-fit: contain;
      width: 100% !important;
      position: relative !important;
      height: 200px !important;
    }
  }
  padding: 5rem 1.5rem 5rem;
  ${mixins.flexCenter}
  background-color: ${colors.white};
  position: relative;
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  width: 100%;
  img {
    margin-bottom: 2.5rem;
  }
  ul {
    padding: 0rem 1.5rem;
  }
  li {
    font-weight: 400;
    margin-bottom: 1rem;
    line-height: 1.5rem;
  }
  h1 {
    font-weight: 400;
    font-size: 2rem;
    color: rgba(243, 114, 90, 1);
  }
  
  a {
    display: flex;
    padding-left: 1.5rem;
    align-items: center;
    color: ${colors.forboleRed};
    svg {
      margin: 0.3rem;
      path {
        fill: ${colors.forboleRed};
      }
    }
  }

  ${media.tablet`
    .image-container {
      width: 50%;
      .image {
        height: 250px !important;
      }
    }
    padding: 5rem;
    .desktopWrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h1 {
      font-size: 2.5rem;
    }
  `}
  ${media.bigDesktop`
  .image-container {
    .image {
      height: 350px !important;
    }
  }
    background-image: url("/static/images/assets/desmos-elements.svg");
    background-repeat: no-repeat;
    background-position: bottom left;
    height: 100vh;
    ${mixins.flexCenter}
    padding: 8rem 5rem 8rem;
    .desktopWrapper {
      ${mixins.desktopMaxWidth}
      ${mixins.flexBetween}
      flex-direction: row-reverse;
      width: 100%;
      display: flex;
    }
    .pbg {
      top: 10rem;
      right: 10rem;
    }
    h1 {
      font-size: 4rem;
      font-weight: 500;
    }
    li {
      width: 100%;
      font-weight: 100;
      font-size: 1rem;
    }
    img {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 0;
    }
    a {
      padding-top: 1.5rem;
    }
  `}
`;
