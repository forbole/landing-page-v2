import styled from "styled-components";
import { media, theme } from "@styles";

const { colors } = theme;

export const SubscribeCSS = styled.div`
  text-align: left;
  width: 100%;
  margin-top: 1em;
  margin-bottom: 1em;

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
    font-size: 16px;
    line-height: 1em;
    margin-bottom: 1em;
    font-weight: 400;
  }
  h2 {
    font-size: 14px;
    line-height: 1em;
    margin-bottom: 1em;
    font-weight: 400;
  }

  .ui.action.input {
    width: 100%;
  }

  .ui.input {
    position: relative;
    right: 0px;
  }
  .ui.button {
    font-size: 12px;
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
    background: rgba(255, 80, 80, 1);
  }
  ${media.bigDesktop`
  margin-top: 0.7rem;
  margin-right: 5vw;
  width: 40vw; 
  h1 + h2 {
  width: fit-content;
  }
  h2 {
    font-weight: 300;
  }
  .ui.action.input {
    width: 100%;
    height: 30%;
  }
  `}
`;
