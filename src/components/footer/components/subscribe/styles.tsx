import styled from "styled-components";
import { media, theme } from "@styles";

const { colors } = theme;

export const SubscribeCSS = styled.div`
  color: ${colors.white};
  padding-bottom: 1rem;
  input::-webkit-input-placeholder {
    color: white !important;
  }
  input:-moz-placeholder {
    color: white !important;
  }
  input::-moz-placeholder {
    color: white !important;
  }
  input:-ms-input-placeholder {
    color: white !important;
  }

  .ui.input > input {
    color: rgba(255, 255, 255, 0.8);
    background: rgba(255, 255, 255, 0.3);
    font-size: 0.8rem;
    font-weight: 300;
  }

  h1 {
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  h2 {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    font-weight: 200;
  }

  .ui.action.input {
    width: 100%;
  }

  .ui.input {
    position: relative;
    right: 0;
  }
  .ui.button {
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
    background: rgba(255, 80, 80, 1);
  }
  ${media.bigDesktop`
  padding-bottom: 0;
  width: 100%;
  .ui.action.input {
    width: 100%;
  }
  `}
`;
