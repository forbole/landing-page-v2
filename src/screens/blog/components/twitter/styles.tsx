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
    padding-bottom: 1.5rem;
    margin-top: 2rem;
    border: solid 1px ${colors.gray100};
  `}
`;
