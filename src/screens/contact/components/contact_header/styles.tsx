import styled from "styled-components";
import { theme, media } from "@styles";

const { headerMargin } = theme;

export const ContactHeaderCSS = styled.div`
  padding: 1rem;
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20vh;
  margin-bottom: 1rem;
  h2 {
    color: white;
    font-weight: 300;
    margin-bottom: ${headerMargin.small};
  }
  p {
    color: white;
    font-weight: 100;
  }
`;
