import styled from "styled-components";
import { mixins, media, theme } from "@styles";

const { colors } = theme;

export const ProductsHeaderCSS = styled.div`
  ${mixins.flexCenter}
  padding: 3rem 1.5rem 1.5rem;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  background-color: white;
  background-image: url("/static/images/assets/forboleProductsbackground.png");
  background-repeat: no-repeat;
  background-position: 58% 1%;
  background-size: 150%;
  .headerDiv {
    margin: auto;
  }
  h1 {
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  .headerp {
    font-weight: 200;
    font-size: 0.8rem;
  }
  ${media.desktop`
    ${mixins.desktopPadding}
    background-position: 50% 52%;
    background-size: 140%;
    height: 100vh;
    h1 {
      font-weight: 500;
      font-size: 4rem;
    }
    .headerp {
      font-weight: 400;
      font-size: 1.5rem;
    }
  `}
`;
