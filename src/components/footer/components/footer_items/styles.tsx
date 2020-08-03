import styled from "styled-components";
import { theme, media } from "@styles";

const { colors } = theme;

export const FooterItemsCSS = styled.div`
  color: ${colors.offwhite};
  list-style-type: none;
  hr {
    margin-bottom: 1rem;
    opacity: 0.3;
  }
  a li {
    color: ${colors.offwhite};
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 300;
  }
  li {
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 400;
    text-decoration: none;
  }

  ${media.bigDesktop`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  .footer-content {
    width: 10rem;
  }
  hr {
    margin: 0px 0px 0px 0px;
  }
`};
`;
