import styled from "styled-components";
import { mixins, media, theme } from "@styles";

const { colors } = theme;

export const ProductDisplayCSS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 1.5rem;
  ${media.tablet`
    flex-direction: row;
    grid-gap: 1rem;
  `}
  ${media.desktop`
    flex-direction: row;
    grid-gap: 5rem;
  `}
`;

export const CallToActionCSS = styled.div`
  color: ${colors.forboleRed};
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
    width: 14.5rem;
    p {
      margin-bottom: 0.5rem;
    }
  `}
  ${media.desktop`
      width: 21.5rem;
      height: 19.125rem;
      padding: 2.5rem 2rem;
  `}
`;
