import styled from "styled-components";
import { media, theme } from "@styles";

const { colors } = theme;

export const ForboleCSS = styled.div`
  color: ${colors.offwhite};
  padding-bottom: 1rem;
  img {
    height: 16px;
    width: 83px;
  }
  p {
    font-weight: 300;
  }

  ${media.bigDesktop`
  img {
    height: 30px;
    width: 125px;
  }
  p {
    font-size: 0.8rem;
  }
  `}
`;
