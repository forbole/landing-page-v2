import styled from "styled-components";
import { Input as SemenaticInput } from "semantic-ui-react";
import { mixins } from "@styles";

export const CalculatorCSS = styled.div`
  margin-top: 1.5rem;
`;

export const Input = styled(SemenaticInput)`
  &.ui.input {
    .ui.button {
      background: black;
      color: white;
      font-weight: 300;
    }
  }
`;

export const StatsDetailsCSS = styled.div`
  padding: 1.5rem 0;
  hr {
    ${mixins.grayHr}
    margin: 0.5rem 0;
  }
`;
