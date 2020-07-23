import styled from "styled-components";
import { theme, media } from "@styles";

const { headerMargin } = theme;

export const ContactMessageCSS = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  .ui.form {
    width: 90vw;
  }
  h2 {
    font-weight: 400;
    font-size: 1.275em;
    height: 1vh;
    text-align: left;
    width: 100%;
  }
  p {
    color: rgba(112, 112, 112, 1);
    font-size: 1em;
    margin-bottom: 0.5rem;
  }
  .ui.input {
    width: 90%;
    margin-bottom: 2em;
  }
  .messages {
    margin-bottom: 2.5em;
  }
  .ui.transparent.input > input,
  .ui.transparent.input > textarea {
    border-color: transparent transparent rgba(0, 0, 0, 0.3) !important;
  }
  button.ui.button {
    color: white;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.05em;
  }
  .ui.button {
    background-color: rgba(18, 113, 227, 0.43);
    width: 100%;
  }
`;
