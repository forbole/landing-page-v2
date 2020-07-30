import styled from "styled-components";
import { animated } from "react-spring";
import { mixins, theme } from "@styles";
import { IShowLanguage } from "../../interfaces";

const { colors } = theme;

export const NavBodyCSS = styled(animated.div)`
  position: fixed;
  width: 100%;
  min-height: 100vh;
  background: white;
  z-index: 99;
  padding: calc(1rem + 50px) 1rem 2rem;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;

  ul {
    list-style-type: none;

    li {
      padding: 1rem 0;

      &.space-between {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: rgba(65, 65, 65, 1);

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

export const LanguageContainerCSS = styled(animated.div) <IShowLanguage>`
  overflow: hidden;
`;
