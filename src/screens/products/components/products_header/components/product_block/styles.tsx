import styled from "styled-components";
import { mixins, media, theme } from "@styles";

const { colors } = theme;

export const ProductDisplayCSS = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 5rem;
`;

export const ProductBlockCSS = styled.div`
  width: 21.5rem;
  height: 19.125rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem 2rem;
  background: #ffffff;

  box-shadow: 0px 10px 40px rgba(41, 41, 42, 0.1);
  border-radius: 0.5rem;
  a {
    color: ${colors.black};
    display: flex;
    align-items: center;
    padding: 0.1rem;
    svg {
      margin: 0.3rem;
      path {
        fill: black;
      }
    }
  }
`;
