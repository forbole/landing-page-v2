import styled from "styled-components";
import { IMobileNavBarIconCSS as INavBody } from "../../interfaces";

export const NavBodyCSS = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 99;
  padding: calc(1rem + 50px) 1rem 1rem;

  ul {
    list-style-type: none;

    li {
      padding: 1rem 0;
    }
  }

  a {
    color: inherit;
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #e6e6e6;
    margin: 1em 0;
    padding: 0;
  }
`;
