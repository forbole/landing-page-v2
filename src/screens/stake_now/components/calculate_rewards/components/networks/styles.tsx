import styled from "styled-components";
import { Button as SemanticButton } from "semantic-ui-react";
import { theme } from "@styles";

const { colors } = theme;

export const NetworkChoicesCSS = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Button = styled(SemanticButton)`
  &.ui.button {
    background: white;
    border: solid 1px ${colors.gray600};
    display: flex;
    align-items: center;
    padding: 0.5rem 0.7rem;
    width: 100%;
  }

  img {
    width: 30px;
    margin-right: 0.4rem;
  }
`;
