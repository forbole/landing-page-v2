/* eslint-disable */
import styled from "styled-components";
import { media } from "@styles";
import { IMobileNavBarIconCSS } from "./interfaces";

export const MobileNavCSS = styled.div`
  position: relative;
  ${media.bigDesktop`
    display: none;
  `}
`;

export const MobileNavBarIconCSS = styled.div<IMobileNavBarIconCSS>`
  width: 20px;
  z-index: 200;
  position: fixed;
  right: 15px;
  top: 12px;
  &:after,
  &:before,
  > div {
    background-color: ${(props) => {
      return props.color || props.displayBackground ? "black" : "white";
    }};
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
