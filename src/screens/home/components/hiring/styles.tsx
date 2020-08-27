import styled from "styled-components";
import { media, theme, mixins } from "@styles";

const { colors } = theme;

export const HiringContentCSS = styled.div`
  color: ${colors.white};
  background-color: ${colors.black};
`;

export const HiringHeaderCSS = styled.div`
  //   background: linear-gradient(0deg, rgb(0, 0, 0, 0.4), rgb(0, 0, 0, 0.1)),
  //     url("static/images/assets/joinUs.png/");
  min-height: 30vh;
  ${mixins.mobileVerticalPadding}
  padding-top: 3.5rem;
  height: 20rem;
  width: 100%;

  img {
    zoom: 0.44;
    object-fit: none;
    object-position: 48% 52%;
  }
  .overlay {
    background-color: rgba(39, 62, 84, 0.82);
    overflow: hidden;
    height: 100%;
    z-index: 2;
    width: 100%;
  }
  ${media.tablet`
  height: 33rem;
  img {
    zoom: 1.1;
    object-position: 48% 53%;
  }
  `}
`;

export const ContentWrapperCSS = styled.div`
  ${mixins.mobilePadding}
  ${mixins.mobileBottomPadding}
  padding-top: 1.5rem;
  h1 {
    font-weight: 100;
    margin-bottom: 0.3rem;
  }
  h2 {
    font-weight: 100;
    font-size: 0.9rem;
  }
  h3 {
    font-weight: 100;
    font-size: 1rem;
    margin-bottom: 3rem;
  }
  .ui.red.button {
    background-color: rgba(255, 80, 80, 1);
  }
`;
