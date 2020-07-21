import styled from "styled-components";
import { theme, media } from "@styles";

const { colors } = theme;

export const FooterItemsCSS = styled.div`
  color: ${colors.offwhite};
  background-color: rgba(26, 26, 44, 1);
  list-style-type: none;
  text-align: left;
  width: 100%;
  a {
    color: ${colors.offwhite};
    font-weight: 200;
  }
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

  ${media.bigDesktop`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-grow: 1;
  margin-top: 0.5rem;
  margin-right: 1rem;
  margin-left: 3rem;

  div{
    width: 10vw;
  }

  a li {
    color: ${colors.offwhite};
    font-size: 0.8rem;
    margin-bottom: 1em;
    font-weight: 300;
  }
  li {
    font-size: 1rem;
    font-weight: 400;
  }`};
`;
