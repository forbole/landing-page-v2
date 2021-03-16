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
  background-position: 50% 0%;
  background-size: 145%;

  .headerDiv {
    //margin: auto;
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-weight: 400;
    font-size: 1.7rem;
    margin-bottom: 0;
    //line-height: 3rem;
  }
  .headerp {
    font-size: 0.8rem;
    line-height: 1.5rem;
    margin-bottom: 3rem;
  }

  ${media.tablet`
  .headerDiv {
    max-width: 900px;
  }
  `}
  ${media.desktop`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10rem;
    background-position: 0px -200px;
    background-size: cover;
    height: 90vh;
    .headerDiv {
      max-width: 1200px;
    }
    h1 {
      font-weight: 500;
      font-size: 4rem;
      line-height: 5rem;
      margin-bottom: 1rem;
    }
    .headerp {
      font-weight: 400;
      font-size: 1.25rem;
    }
  `}
`;

// export const ProductsBackgroundCSS = styled.div`
//   height: 90vh;
//   background-color: white;
//   background-image: url("/static/images/assets/forboleProductsbackground.png");
//   background-repeat: no-repeat;
//   background-position: 58% 0%;
//   background-size: 150%;
//   background-size: cover;
// `;
