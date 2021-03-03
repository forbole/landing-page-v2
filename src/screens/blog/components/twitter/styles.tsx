import styled from "styled-components";
import { mixins, media, theme } from "@styles";

const { colors } = theme;

export const TwitterCSS = styled.div`
  ${mixins.mobileLastContainerPadding}

  h3 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  ${media.bigDesktop`
    border: 1px solid rgba(206, 206, 206, 1);
    border-radius: 8px;
    margin-top: 2rem;
    padding: 2.5rem 1.5rem 1.5rem;
    padding-top: 1.5rem;
  `}
`;
