import styled from "styled-components";
import { mixins, theme, media } from "@styles";

const { colors } = theme;

export const DashboardContentCSS = styled.div`
  padding: 5rem 1.5rem 3rem;
  ${mixins.flexCenter}
  background-color: rgba(245, 245, 245, 1);
  z-index: -1;
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
  }
  .pbg {
    position: absolute;
    width: 144px;
    height: 144px;
    top: 2rem;
    right: 0.5rem;
    z-index: -1;
  }
  ${media.tablet`
    padding: 5rem;
    .pbg {
      width: 418px;
      height: 418px;
    }
    h1 {
      font-size: 2.5rem;
    }
  `}
  ${media.bigDesktop`
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
      // display: flex;
      // justify-content: flex-start;
      width: 100%;
      font-weight: 100;
      font-size: 1rem;
    }
    img {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 0;
    }
    // .content {
    //   padding-right: 1.5rem;
    //   width: 50%;
    // }
  `}
`;
