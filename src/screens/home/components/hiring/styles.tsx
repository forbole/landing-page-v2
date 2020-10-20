import styled from "styled-components";
import { media, theme, mixins } from "@styles";

const { colors } = theme;

export const HiringContentCSS = styled.div`
  color: ${colors.white};
  background-color: ${colors.black};
  position: relative;
  display: flex;
  flex-direction: column;
  height: 90vh;
  ${media.bigDesktop`
  display: flex;
  flex-direction: row-reverse;
  min-height: 35rem;
  position: relative;
  `}
`;

export const HiringHeaderCSS = styled.div`
  min-height: 30vh;
  ${mixins.mobileVerticalPadding}
  padding-top: 5.5rem;
  width: 100%;
  object-fit: cover;
  flex: 1;
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
  ${media.bigDesktop`
  padding: 0rem;
  height: 100%;
  width: 40%;
  img {
  zoom: 0.8;
  object-position: 41% 4%;
  }
  `}
`;

export const ContentWrapperCSS = styled.div`
  ${mixins.mobilePadding}
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
    font-weight: 100;

    &:hover {
      background-color: rgba(255, 165, 0, 1);
    }
  }
  ${media.bigDesktop`
  ${mixins.flexCenter}
  padding: 5rem 3.5rem 3.5rem;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  padding: 5rem 4rem 5rem;
  h1 {
      font-size: 4rem;
      margin-bottom: 1.5rem;
  }
  h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
  }
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    width: 500px;
  }
  `}
`;

export const NextIconCSS = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: block;
  margin-left: auto;
  margin-right: 0;
  z-index: 5;
  svg > path {
    fill: ${colors.white};
  }
  ${media.bigDesktop`
  bottom: 15px;
  right: 20px;`}
`;
