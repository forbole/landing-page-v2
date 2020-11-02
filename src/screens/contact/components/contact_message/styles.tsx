import styled from "styled-components";
import { media } from "@styles";

export const ContactMessageCSS = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  h2 {
    font-weight: 400;
    font-size: 1.4rem;
    text-align: left;
    width: 100%;
  }
  p {
    color: rgba(112, 112, 112, 1);
    font-size: 1rem;
    padding-bottom: 0.5rem;
  }
  .ui.input {
    width: 90%;
    padding-bottom: 2rem;
  }
  .messages {
    padding-bottom: 2.5rem;
  }
  .ui.raised.raised.segment {
    padding: 2rem 1rem;
  }
  .ui.form {
    width: 100%;
  }
  .ui.form input[type="text"] {
    padding: 0.58035714em 0em;
  }
  .ui.transparent.input > input,
  .ui.transparent.input > textarea {
    border-color: transparent transparent rgba(0, 0, 0, 0.3) !important;
  }
  button.ui.button {
    color: white;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
  }
  .ui.button {
    background-color: rgba(18, 113, 227, 1);
    width: 100%;
  }
  .ui.segment {
    border-radius: 0;
  }
  ${media.tablet`
    padding-top: 0;

  `}
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
    padding-bottom: 5rem;
  }
  h2 {
    padding-bottom: 2rem;
  }
  .ui.raised.raised.segment {
    padding: 3.5rem;
  }
  .ui.form {
    width: 100%;
  }
  .ui.segment {
    height: 100%;
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
      display: block;
      margin-left: auto;
      margin-right: 0;
  }`}
`;
