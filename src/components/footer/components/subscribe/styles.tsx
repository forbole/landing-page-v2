import styled from "styled-components";
import { media, theme } from "@styles";

const { colors } = theme;

export const SubscribeCSS = styled.div`
  color: ${colors.white};
  padding-bottom: 1rem;

  h1 {
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  h2 {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    font-weight: 200;
  }

  .ui.button {
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
    background: ${colors.forboleRed};
    // border-radius: 0rem 0.25rem 0.25rem 0rem;
    width: 100%;
  }
  ${media.bigDesktop`
  padding-bottom: 0;
  width: 100%;
  `}
`;
