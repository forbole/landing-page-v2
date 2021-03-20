import styled from "styled-components";
import { mixins, theme, media } from "@styles";

const { colors } = theme;

export const BigDipperStatsCSS = styled.div`
  display: none;
  ${media.bigDesktop`
  display: flex;
  justify-content: space-around;
  margin: auto;
  padding: 3rem 2rem;
  max-width: 1200px;
  width: 100%;
  box-shadow: 0px 10px 40px 0px rgba(41, 41, 42, 0.1);
  background: transparent;
  box-shadow: 0px 10px 40px rgba(41, 41, 42, 0.1);
  border-radius: 0.5rem;
  hr {
    display:inline-block;
    background: rgba(189,8,28,0.4);
    opacity: 0.4;
    width: 1px; 
    height: 100px;
    border: none;
  }
  `}
`;

export const BigDipperDivCSS = styled.div`
  padding: 0rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 3.375rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: ${colors.forboleRed};
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    color: ${colors.forboleRed};
  }
`;

export const ContentCSS = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
