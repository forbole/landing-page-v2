import styled from "styled-components";
import { mixins, media, theme } from "@styles";

const { colors } = theme;

export const ProductsHeaderCSS = styled.div`
  ${mixins.desktopPadding}
  ${mixins.flexCenter}
  align-items: flex-start;
  flex-direction: column;
  height: 100vh;
  background-color: white;
  background-image: url("/static/images/assets/forboleProductsbackground.png");
  background-repeat: no-repeat;
  background-position: 50% 52%;
  background-size: 140%;
  .headerDiv {
    margin: auto;
  }
  h1 {
    font-weight: 500;
    font-size: 4rem;
  }
  .headerp {
    font-weight: 400;
    font-size: 1.5rem;
  }
`;
