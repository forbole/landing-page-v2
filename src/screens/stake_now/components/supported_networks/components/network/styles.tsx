import styled from "styled-components";
import { Button as SemanticButton } from "semantic-ui-react";
import { media } from "@styles";

export const NetworkCSS = styled.div`
  padding: 1rem;
  background: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 35px;
  }

  p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &.amount {
      margin-top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-right: 0.4rem;
        width: 13px;
      }
    }
  }

  ${media.tablet`
    padding: 2rem 1rem;
  `}
`;

export const Button = styled(SemanticButton)`
  &.ui.button {
    width: 100%;
    font-weight: 300;
    background: black;
    color: white;
  }
`;
