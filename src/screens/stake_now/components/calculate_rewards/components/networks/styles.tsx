import styled from "styled-components";
import { Button as SemanticButton } from "semantic-ui-react";
import { theme, media } from "@styles";

const { colors } = theme;

export const NetworksCSS = styled.div`
  .css-2b097c-container {
    padding-bottom: 1rem;
  }
  .css-1hb7zxy-IndicatorsContainer {
    span {
      display: none;
    }
  }
  .css-uk2c3s-control {
    box-shadow: 0 0 0 1px rgba(152, 152, 152, 1);
    border-color: rgba(152, 152, 152, 1);
    :hover {
      border-color: rgba(152, 152, 152, 1);
    }
  }
  .css-26l3qy-menu {
    margin-top: 0px;
    top: 90%;
  }
`;

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
    border: solid 1px rgba(243, 83, 99, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem 0.7rem;
    width: 100%;
    color: rgba(243, 83, 99, 1);

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 300;
    }

    &.active {
      background: rgba(243, 83, 99, 1);

      p {
        color: white;
      }
    }
  }
`;
