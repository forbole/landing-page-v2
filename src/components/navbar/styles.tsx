import styled from "styled-components";

export const NavBarCSS = styled.header`
  position: fixed;
  display: fixed;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  width: 100vw;
  padding: 0 10vw;
  color: #ffffff;
  z-index: 1;

  a {
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;
  }

  .nav-links {
    display: flex;
    list-style: none;

    .nav-link {
      a {
        margin: 0.2rem;
        padding: 1rem 0.5rem;
      }
      a:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
`;
