import styled from "styled-components";
import { theme, media, mixins } from "@styles";

const { colors, headerMargin } = theme;

export const CosmosHeaderCSS = styled.div`
h2{
  color: ${colors.white};
  font-weight: 100;
}
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3rem 3rem;
  width: 100%;
  min-height: 10rem;
  background-color: rgba(55, 68, 172, 1);
  background-image: url("images/assets/cosmos_hub_details_elements.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 59px -93px;
 
  }
  .cosmoslogo {
    height: 40px;
    width: 40px;
    margin-right: 0.5rem;
  }
`;
