import styled from "styled-components";
import { theme } from "@styles";

const { colors } = theme;

export const NavItemsCSS = styled.div`
  a:last-child {
    margin-right: 0;
  }

  a {
    color: ${colors.gray600};
    margin: 0 0.5rem;
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
      color: ${colors.gray600};
    }

    &.active {
      color: ${colors.red};

      div {
        color: ${colors.red};
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
    color: ${colors.gray600};

    .menu {
      right: 0;
      left: auto;
    }
  }
`;
