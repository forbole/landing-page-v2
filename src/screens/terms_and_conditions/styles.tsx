import styled from "styled-components";
import { MaxWidthContainerCSS as MaxWidthCSS } from "@styles/components";
import { mixins, theme, media } from "@styles";

const { colors } = theme;

export const TNCCSS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 5rem 0;
`;

export const MaxWidthContainerCSS = styled(MaxWidthCSS)`
  margin: auto;
`;
