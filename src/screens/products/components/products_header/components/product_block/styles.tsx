import styled from "styled-components";
import { media, theme } from "@styles";

const { colors } = theme;

export const ProductDisplayCSS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 1.5rem;
  margin-top: -4rem;
  padding-bottom: 5rem;
  ${media.tablet`
    flex-direction: column;
    grid-gap: 1rem;
    margin-top: -8rem;
    position: inherit;
  `}
  ${media.desktop`
    flex-direction: row;
    grid-gap: 5rem;
    margin-top: -32rem;
    padding-bottom: 10rem;
    width: 100%;
    align-self: center;
    position: absolute;
    top: 55rem;
  `}
`;

export const CallToActionCSS = styled.div`
  color: ${colors.forboleRed};
  ${media.desktop`
    position: absolute;
    bottom: 2rem;
  `}
`;

export const ProductBlockCSS = styled.div`
  width: 17rem;
  height: 19rem;
  padding: 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${colors.white};

  box-shadow: 0px 10px 40px rgba(41, 41, 42, 0.1);
  border-radius: 0.5rem;

  h3 {
    margin-bottom: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  a {
    display: flex;
    align-items: center;
    padding: 0.1rem;
    color: ${colors.forboleRed};
    svg {
      margin: 0.3rem;
      path {
        fill: ${colors.forboleRed};
      }
    }
  }
  ${media.tablet`
    //width: 14.5rem;
    width: 25rem;
    width: 55%;
    p {
      margin-bottom: 0.5rem;
    }
  `}
  ${media.desktop`
      width: 21.5rem;
      height: 19.125rem;
      padding: 2.5rem 2rem;
      position: relative;
      p {
        margin-bottom: 0;
      }
  `}
`;
