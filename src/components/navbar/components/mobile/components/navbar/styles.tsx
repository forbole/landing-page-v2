import styled from "styled-components";
import { media, theme } from "@styles";
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
  background: ${(props) => (props.isOpen ? "white" : "transparent")};
  transition: 0.3s, background 1s;

  svg {
    width: 100px;

    path {
      fill: ${(props) => (props.isOpen ? colors.forboleRed : "white")};
    }
  }
`;

export const MobileNavBarIconCSS = styled.div<IMobileNavBarIconCSS>`
  width: 20px;
  z-index: 8;
  &:after,
  &:before,
  > div {
    background-color: white;
    border-radius: 10px;
    content: "";
    display: block;
    height: 2px;
    margin: 4px 0;
    transition: all 0.4s ease-in-out;
  }

  ${(props) =>
    props.isOpen
      ? `
      &:before {
        transform: translateY(7px) rotate(137deg);
        background-color: black;
      }

      &:after {
        transform: translateY(-5px) rotate(-140deg);
        background-color: black;
      }

      > div {
        transform: scale(0);
      }
    `
      : ""}

  ${media.bigDesktop`
      display: none;
  `}
`;
