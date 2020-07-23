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
    font-size: 1.275rem;
    height: 1vh;
    text-align: left;
    width: 100%;
  }
  p {
    color: rgba(112, 112, 112, 1);
  }
  .ui.transparent.input > input,
  .ui.transparent.input > textarea {
    border-color: transparent transparent rgba(0, 0, 0, 0.3) !important;
  }
`;
