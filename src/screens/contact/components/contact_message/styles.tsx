import styled from "styled-components";
import { theme, media } from "@styles";

const { headerMargin } = theme;

export const ContactMessageCSS = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  .ui.form {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
