import styled from "styled-components";
import { theme } from "@styles";
import { IDesktopNavCSS } from "../../interfaces";

const { colors } = theme;

export const NavItemsCSS = styled.div<IDesktopNavCSS>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  a:last-child {
    margin-right: 0;
  }

  a {
    color: ${(props) => (props.color ? props.color : "white")};
    margin: 0 2rem;
    position: relative;

    div {
      top: 15px;
      right: 0;
      left: 0;
      position: absolute;
      display: flex;
      justify-content: center;
      opacity: 0;
      transition: 0.2s;
      color: ${(props) => (props.color ? props.color : colors.forboleRed)};
    }

    &.active {
      display: flex;
      justify-content: center;
      background-color: ${(props) =>
        props.padding == "0" ? "transparent" : colors.white};
      border-radius: 1rem;
      width: fit-content;
      padding: ${(props) => (props.padding ? props.padding : "0")};
      color: ${colors.forboleRed};

      div {
        color: ${colors.forboleRed};
      }
    }

    &:hover {
      cursor: pointer;

      div {
        opacity: 1;
      }
    }
  }

  .ui.dropdown {
    color: ${(props) => (props.color ? props.color : "white")};
    margin-left: 3rem;
    .menu {
      right: 0;
      left: auto;
    }
  }
`;
