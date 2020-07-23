import styled from "styled-components";
import { mixins, theme } from "@styles";
import { IMobileNavBarIconCSS as INavBody } from "../../interfaces";

const { colors } = theme;

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

      &.space-between {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .language-globe {
          ${mixins.flexCenter}
          svg {
            margin-right: 0.5rem;
            path {
              fill: ${colors.gray400};
            }
          }
        }

        .select-language {
          ${mixins.flexCenter}
          svg {
            margin-left: 0.5rem;
            path {
              fill: ${colors.gray400};
            }
          }
        }
      }
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
