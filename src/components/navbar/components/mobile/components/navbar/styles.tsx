import styled from "styled-components";
import { theme } from "@styles";
import { IMobileNavBarIconCSS } from "../../interfaces";

const { colors } = theme;

export const MobileNavBarCSS = styled.div<IMobileNavBarIconCSS>`
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background: ${(props) => (props.displayBackground ? "white" : "transparent")};
  transition: 0.3s, background 1s;

  svg {
    width: 100px;
    margin-top: 0.5rem;
    path {
      fill: ${(props) =>
        props.isOpen || props.color || props.displayBackground
          ? colors.forboleRed
          : "white"};
    }
  }
`;
