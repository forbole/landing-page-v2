import styled from "styled-components";
import { theme, media, mixins } from "@styles";

const { colors } = theme;

export const NetworkHeaderCSS = styled.div`
  width: 100%;
  min-height: 10rem;
  background-color: rgba(55, 68, 172, 1);
  background-image: url(/static/images/assets/cosmos-hub-details-elements.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 52px -59px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;

  .wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    color: white;
  }

  img {
    width: 25px;
    margin-right: 0.5rem;
  }

  ${media.tablet`
    background-position: 62px -334px;
    h2 {
      font-size: 2rem;
    }
    img {
      width: 30px;
    }
  `}

  ${media.bigDesktop`
  height: 25rem;
  background-position: 600px -734px;
  .wrap {
    ${mixins.desktopMaxWidth}
    justify-content: flex-start;
  }
  h2 {
    font-size: 2.5rem;
  }
  img {
    width: 50px;
    margin-right: 1rem;
  }
  `}
`;
