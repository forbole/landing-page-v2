import styled from "styled-components";
import { media } from "@styles";

export const ContactMessageCSS = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  .ui.form {
    width: 90vw;
    margin-top: -0.5rem;
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
    background-color: rgba(18, 113, 227, 1);
    width: 100%;
  }

  .ui.segment {
    border-radius: 0;
  }
  ${media.bigDesktop`
  .nameField{
    float: left;
    width: 50%;
  }
  .emailField{
    float: right;
    width: 50%;
  }
  .messages {
    margin-bottom: 5em;
  }
  h2 {
    margin-bottom: 3em;
  }
  .ui.form {
    width: 100%;
    margin-top: 0;
  }
  .ui.segment {
    height: 557px;
    padding: 3.5em;
  }
  .ui.input{
    width: 97%;
  }
  .ui.button {
    background-color: rgba(18, 113, 227, 1);
    width: 109px;
    height: 40px;
  }
    button.ui.button {
      margin: 1em 1em 1em 27em;
      float: right;
  }`}
  ${media.tablet`
    padding-top: 0;
  
  `}
`;
