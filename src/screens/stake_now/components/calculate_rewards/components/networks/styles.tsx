import styled from "styled-components";
import { Button as SemanticButton } from "semantic-ui-react";
import { theme, media } from "@styles";

const { colors } = theme;

export const NetworkChoicesCSS = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-gap: 12px 12px;

  ${media.tablet`
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  `}

  ${media.desktop`
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  `}
`;

export const Button = styled(SemanticButton)`
  &.ui.button {
    background: white;
    border: solid 1px ${colors.gray600};
    display: flex;
    align-items: center;
    padding: 0.3rem 0.7rem;
    width: 100%;

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 300;
    }

    &.active {
      background: ${colors.black};

      p {
        color: white;
      }
    }
  }

  img {
    width: 30px;
    margin-right: 0.4rem;
  }
`;
