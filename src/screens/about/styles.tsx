import styled from "styled-components";
import { mixins, media, theme } from "@styles";

const { colors } = theme;

export const AboutHeaderCSS = styled.div`
  ${media.bigDesktop`
  min-height: 100vh;
`}
`;
