import styled from "styled-components";
import { mixins, theme } from "@styles";

const { colors } = theme;

export const BDHeaderCSS = styled.div`
  ${mixins.mobilePadding}
  padding-top: 5rem;
  background-color: ${colors.red};
  display: flex;
  flex-direction: column;
  width: 100%;
  a {
    color: ${colors.white};
    padding-right: 0.5rem;
  }
  .socialMedia > a {
    padding-right: 1rem;
  }
  h1,
  h2,
  span {
    color: ${colors.white};
    margin-bottom: 0.5rem;
    font-weight: 100;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  svg > path {
    fill: white;
  }
`;
