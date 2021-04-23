import styled from "styled-components";
import { media, theme } from "@styles";

const { colors } = theme;

export const PolicyCSS = styled.div`
  color: rgba(201, 201, 201, 1);
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.2rem;

  ${media.bigDesktop`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`}
`;

export const TermsCSS = styled.div`
  color: rgba(201, 201, 201, 1);
  display: flex;
  align-items: center;
  height: 1rem;
  .vhr {
    padding: 0 0.2rem;
    height: 100%;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    margin: 0 1rem;
  }
  small {
    &:hover {
      cursor: pointer;
    }
  }
  ${media.bigDesktop`

`}
`;
