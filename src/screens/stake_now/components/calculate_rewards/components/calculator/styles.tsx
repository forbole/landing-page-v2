import styled from "styled-components";
import { Input as SemenaticInput } from "semantic-ui-react";
import { mixins, media, theme } from "@styles";

const { colors } = theme;

export const CalculatorCSS = styled.div`
  margin-top: 1.5rem;

  ${media.bigDesktop`
    margin-top: 0;
  `}
`;

export const Input = styled(SemenaticInput)`
  &.ui.input {
    width: 100%;
    .ui.button {
      background: ${(props) =>
        props.selectedtoken == "disabled" ? colors.gray400 : colors.black};
      color: white;
      font-weight: 300;
      transition: 0.2s;
      padding: 0.5rem 1.2rem;
      min-width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0rem 0.25rem 0.25rem 0rem;
      &:hover {
        background: ${(props) =>
          props.selectedtoken == "disabled" ? colors.gray400 : colors.black};
        cursor: ${(props) =>
          props.selectedtoken == "disabled" ? "not-allowed" : "pointer"};
      }
    }
    > input {
      width: 65%;
      border-radius: 0.25rem 0rem 0rem 0.25rem;
    }
  }
  ${media.tablet`
  &.ui.input {
    > input {
      width: 80%;
    }
  }
  `}
  ${media.bigDesktop`
  &.ui.input {
    > input {
      width: 70%;
    }
  }
  `}
`;

export const StatsDetailsCSS = styled.div`
  padding: 1.5rem 0;
  overflow: auto;
  hr {
    ${mixins.grayHr}
    margin: 0.5rem 0;
  }

  ${media.tablet`
    min-width: 70%;
    max-width: 900px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    hr {
      display: none;
    }
  `}
`;
