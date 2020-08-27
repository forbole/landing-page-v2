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
  //   margin-top: 2rem;
  ${mixins.mobileVerticalPadding}
  height: 20rem;
  width: 100%;
  //   object-fit: cover;

  img {
    zoom: 0.44;
    object-fit: none;
    object-position: 48% 52%;
  }
  .overlay {
    background-color: rgba(39, 62, 84, 0.82);
    overflow: hidden;
    height: 100%;
    z-index: 1;
  }
`;

export const ContentWrapperCSS = styled.div``;
