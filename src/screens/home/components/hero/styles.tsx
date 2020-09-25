import styled from "styled-components";
import { theme, mixins, media } from "@styles";

const { colors } = theme;

export const HeroContentCSS = styled.div`
  ${mixins.mobilePadding};
  background-image: linear-gradient(0deg, rgb(0, 0, 0, 0.4), rgb(0, 0, 0, 0.1)),
    url("static/images/assets/horse.png");
  background-repeat: no-repeat;
  background-position: 50% 52%;
  background-size: 444%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${media.tablet`
  background-size: auto;
  background-position: bottom 55%;
  `}

  // ${media.bigDesktop`
  // background-size: 100%;
  // background-position: 50% 45%;
  // min-height: 35rem;
  // width: 100%;
  // .wrapper {
  //   ${mixins.desktopMaxWidth}
  // }
  // `}
`;

export const MainContentCSS = styled.div`
  text-align: center;
  color: white;

  h1 {
    margin-bottom: 0.5rem;
  }

  ${media.tablet`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
    width: 80%;
  }
  `}
`;

export const HomeIconsCSS = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px solid ${colors.white};
    border-radius: 5px;
    width: 100px;
    height: 100px;
    color: ${colors.white};
    font-size: 0.9rem;
  }

  svg {
    margin-bottom: 0.5rem;
  }

  ${media.tablet`
    .icon {
      width: 80px;
      height: 80px;
      font-size: 0.8rem;
    }

    svg {
      margin-bottom: 0.3rem;
    }
  `}

  // ${mixins.flexBetween}
  // display: inline-flex;
  // flex-wrap: wrap;
  // width: 17rem;
  // .icon {
  //   border-radius: 0.5rem;
  //   border: 1px solid ${colors.white};
  //   box-sizing: border-box;
  //   width: 4rem;
  //   height: 4rem;
  //   ${mixins.flexCenter}
  //   flex-direction: column;
  //   font-size: 0.8rem;
  // }
  // svg > path {
  //   fill: ${colors.white};
  // }

  // ${media.bigDesktop`
  // `}
`;
export const NextIconCSS = styled.div`
  // position: absolute;
  // bottom: 0px;
  // right: 0px;
  // display: block;
  // margin-left: auto;
  // margin-right: 0;
  // svg > path {
  //   fill: ${colors.white};
  // }
`;
