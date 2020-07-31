import styled from "styled-components";
import { theme, media } from "@styles";

const { colors } = theme;

export const FooterItemsCSS = styled.div`
  color: ${colors.offwhite};
  list-style-type: none;
  .ui {
    margin-bottom: 1rem;
  }
  hr {
    margin-bottom: 1rem;
    opacity: 0.3;
  }
  li {
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
  a li {
    color: ${colors.offwhite};
    font-size: 1rem;
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
