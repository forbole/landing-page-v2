import styled from "styled-components";
import { theme, media, mixins } from "@styles";

const { colors } = theme;

export const CosmosHeaderCSS = styled.div`
  width: 100%;
  min-height: 10rem;
  background-color: rgba(55, 68, 172, 1);
  background-image: url("static/images/assets/cosmos-hub-details-elements.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 52px -59px;

  .wrapper {
    display: flex;
    align-items: center;
  }

  h2 {
    color: ${colors.white};
    font-weight: 100;
  }
  .cosmoslogo {
    height: 40px;
    width: 40px;
    margin-right: 0.5rem;
  }

  ${media.tablet`
  background-position: 62px -334px;
  h2 {
    font-size: 3rem;
  }
  .cosmoslogo {
    height: 60px;
    width: 60px;
    margin-right: 1rem;
  }`}

  ${media.bigDesktop`
  min-height: 25rem;
  background-position: 600px -734px;
  ${mixins.flexCenter}
  .wrapper {
    ${mixins.desktopMaxWidth}
    width: 100%;
    display: flex;
  }
  h2 {
    ${mixins.desktopMaxWidth}
    width: 100%;
    font-size: 3rem;
    font-weight: 100;
    justify-content: flex-start;
  }
  .cosmoslogo {
    ${mixins.desktopMaxWidth}
    height: 70px;
    width: 70px;
    justify-content: flex-start;
  }
  `}
`;
