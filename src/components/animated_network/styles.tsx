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
  color: rgba(0, 0, 0, 0.87);

  box-shadow: 0px 10px 40px rgba(41, 41, 42, 0.1);
  border-radius: 0.5rem;

  img {
    width: 40px;
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

  ${media.bigDesktop`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 1rem;
    transition: 0.5s ease;
    height: 210px;
    position: relative;

    .flex {
      width: 100%;
    }

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      transition: 1s ease;
      width: 60px;
    }

    p {
      text-align: center;
      &.amount {
        height: 27px;
        overflow: hidden;
      }

      &.name {
        position: absolute;
        left: 0;
        right: 0;
        top: 37%;
      }
    }

    &:hover {
      box-shadow: 0px 8px 13px 3px rgba(214, 214, 214, 0.45);
      cursor: pointer;
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
          border-radius: 0 0 5px 5px;
        }
        100% {
          padding-top: calc(0.5rem + 0.6875em);
          padding-bottom: calc(0.5rem + 0.6875em);
          border-radius: 0 0 5px 5px;
        }
      }

      @keyframes amountHover {
        20% {
          font-size: 1.3rem;
          margin-top: calc(7px + 0.5rem);
          margin-bottom: 1rem;
        }
        100% {
          font-size: 1.3rem;
          margin-top: calc(7px + 0.5rem);
          margin-bottom: 1rem;
        }
      }

      @keyframes nameHover {
        50% {
          opacity: 0%;
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes imgHover {
        100% {
          margin-top: 20px;
        }
      }

      .button-container {
        animation: buttonContainerHover 1.5s;
        -webkit-animation-fill-mode: forwards;
        .ui.button {
          animation: uiButtonHover 1.5s;
          -webkit-animation-fill-mode: forwards;
          animation-timing-function: ease-out;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0;
        }
      }

      img {
        animation: imgHover 0.5s;
        -webkit-animation-fill-mode: forwards;
      }

      p {
        &.amount {
          animation: amountHover 1.5s;
          -webkit-animation-fill-mode: forwards;
        }

        &.name {
          animation: nameHover 0.5s;
          -webkit-animation-fill-mode: forwards;
        }
      }
    }
  `}
`;

export const Button = styled(SemanticButton)`
  &.ui.button {
    width: 100%;
    height: 2.125rem;
    font-weight: 300;
    background: black;
    color: white;
    margin-right: 0;
    padding: 0.6875em 0.46em 0.6875em;
  }
`;
