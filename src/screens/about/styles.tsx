import styled from "styled-components";
import { mixins, media, theme } from "@styles";

const { colors } = theme;

export const AboutHeaderCSS = styled.div`
  ${media.bigDesktop`
  margin-bottom: 10rem;
  height: 100vh;
`}
`;
