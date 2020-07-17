import styled from "styled-components";
import { theme } from "@styles";

const { colors } = theme;

export const FooterItemsCSS = styled.div`
  color: ${colors.offwhite};
  background-color: rgba(26, 26, 44, 1);
  list-style-type: none;
  padding: 15px;
  text-align: left;
  width: 100%;
  .ui {
    margin-bottom: 1em;
  }
  hr {
    margin-bottom: 1em;
    opacity: 0.3;
  }
  li {
    margin-bottom: 1em;
  }
  li:first-of-type {
    font-size: 16px;
    font-weight: 500;
  }
`;
