import styled from "styled-components";
import { Button as SemanticButton } from "semantic-ui-react";
import { theme, media } from "@styles";

const { colors } = theme;

export const BlockCSS = styled.div`
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  border-radius: 0.5rem;
  box-shadow: 0px 0.3rem 0.4rem 0px rgba(41, 41, 42, 0.1);

  // height: 256px !important;

  .button-container .ui.button {
    display: block;
    display: flex;
    width: 19rem;
    height: 2.125rem;
    font-weight: 300;
    background: ${colors.black};
    color: ${colors.white};
    margin-right: 0;
    padding: 0.6875em 0.46em 0.6875em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .token {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${colors.black};
  }

  h3 {
    font-weight: 300;
    margin-bottom: 0;
    padding: 0.5rem 0;
    font-size: 1.25rem;
  }
  p {
    margin-bottom: 0;
  }
  ${media.tablet`

  `}
  ${media.bigDesktop`
    padding: 1rem;
    margin: 0 1rem;
    height: 340px;
    transition: 0.5s ease;

    .button-container .ui.button {
      display: none;
    }

    &:hover {
      box-shadow: 0px 8px 13px 3px rgba(214, 214, 214, 0.45);
      cursor: pointer;
      .button-container .ui.button {
        display: block;
        display: flex;
        width: 17rem;
        height: 2.125rem;
        font-weight: 300;
        background: ${colors.black};
        color: ${colors.white};
        margin-right: 0;
        padding: 0.6875em 0.46em 0.6875em;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      @keyframes buttonContainerHover {
        20% {
          margin-left: -1rem;
          margin-right: -1rem;
          margin-bottom: -1rem;
        }
        100% {
          margin-left: -1rem;
          margin-right: -1rem;
          margin-bottom: -1rem;
        }
      }

      @keyframes uiButtonHover {
        20% {
          padding-bottom: calc(0.5rem + 0.6875em);
          padding-top: calc(0.5rem + 0.6875em);
        }
        100% {
          padding-top: calc(0.5rem + 0.6875em);
          padding-bottom: calc(0.5rem + 0.6875em);
        }
      }

      @keyframes uiBlockHover {
        20% {
          height: 360px;
        }
        100% {
          height: 360px;
        }
      }

      .button-container {
        animation: buttonContainerHover 1.5s;
        -webkit-animation-fill-mode: forwards;
        padding-top: 3.5rem;
        .ui.button {
          &:hover {
          animation: uiButtonHover 1.5s;
          -webkit-animation-fill-mode: forwards;
          animation-timing-function: ease-out;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: .5rem;
          }
        }
      }
      animation: uiBlockHover 1.5s;
      -webkit-animation-fill-mode: forwards;
      animation-timing-function: ease-out;
    }

    a {
      display: flex;
      flex-direction: column;
      color: ${colors.black};
    }

    .token {
      font-size: 1.5rem;
      font-weight: 400;
      color: ${colors.black};
    }

    img {
      border-radius: 0.1rem;
    }
  `}
`;

export const FlexCSS = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  .title-container {
    color: ${colors.black};
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    img {
      height: 3rem;
      width: 3rem;
      object-fit: cover;
    }
  }
  .usd {
    color: ${colors.black};
    padding-bottom: 0.5rem;
  }
`;

export const PercentCSS = styled.div`
  background: ${colors.black};
  border-radius: 1rem;
  padding: 0.1rem 0.7rem;
  color: ${colors.white};
`;

export const Button = styled(SemanticButton)`
  ${media.bigDesktop`
    &.ui.button {
      display: none;
    }
`}
`;
