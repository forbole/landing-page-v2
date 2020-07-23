import styled from "styled-components";
import { media } from "@styles";
import { IMobileNavBarIconCSS } from "./interfaces";

export const MobileNavBarCSS = styled.div`
  width: 100%;
  background: pink;
  position: fixed;
  z-index: 100;
  top: 0;
  height: 100px;
`;

export const MobileNavBarIconCSS = styled.div<IMobileNavBarIconCSS>`
  width: 27px;
  z-index: 8;
  // position: fixed;
  // top: 1.5rem;
  // right: 1rem;
  &:after,
  &:before,
  > div {
    background-color: black;
    border-radius: 10px;
    content: "";
    display: block;
    height: 3px;
    margin: 4px 0;
    transition: all 0.4s ease-in-out;
  }

  ${(props) =>
    props.isOpen
      ? `
      &:before {
        transform: translateY(7px) rotate(137deg)
      }

      &:after {
        transform: translateY(-7px) rotate(-137deg)
      }

      > div {
        transform: scale(0)
      }
    `
      : ""}

  ${media.bigDesktop`
      display: none;
  `}
`;
