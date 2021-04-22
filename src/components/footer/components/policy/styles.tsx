import styled from "styled-components";
import { media, theme } from "@styles";

const { colors } = theme;

export const PolicyCSS = styled.div`
  color: rgba(201, 201, 201, 1);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${media.bigDesktop`

`}
`;

export const TermsCSS = styled.div`
  color: rgba(201, 201, 201, 1);
  display: flex;
  align-items: center;
  height: 1rem;
  hr {
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    display: inline-block;
    height: 100%;
  }
  ${media.bigDesktop`

`}
`;
