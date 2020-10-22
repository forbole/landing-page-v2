import styled from "styled-components";
import { media } from "@styles";

const PINK = `rgba(253, 103, 103, 1)`;

export const HubDetailCSS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  .main-content-hr {
    display: none;
  }

  .title {
    &.main {
      display: flex;
      align-items: center;

      &::before {
        content: " ";
        background: ${PINK};
        height: 1.5rem;
        width: 4px;
        margin-right: 0.3rem;
        border-radius: 4px;
      }

      img {
        width: 30px;
        margin-right: 0.3rem;
      }
    }
  }

  ${media.bigDesktop`
    &.main {
      flex-direction: column;
      margin-bottom: 1rem;
    }

    .title {
      width: 100%;
      &.main {
        font-size: 1.3rem;
        margin-bottom: 0;
        &::before {
          display: none;
        }

        img {
          width: 30px;
        }
      }
    }
  `}
`;

export const StatDetailsCSS = styled.div`
  &:not(.main) {
    display: flex;
  }

  .atom {
    &.main {
      font-size: 1.15rem;
    }
  }

  p {
    text-align: right;
    margin-bottom: 0;
    width: 100%;
  }

  ${media.bigDesktop`
    width: 100%;
    // display: flex;
    align-items: center;
    justify-content: space-between;
    .atom {
      &.main {
        text-align: left;
        font-size: 1.8rem;
      }
    }

    .main-only-content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .usd {
        font-size: 1.3rem;
        text-align: left;
      }
    }

    .main-content-hr {
      margin-bottom: 0;
      display: block;
      position: relative;
      width: 105%;
      &:before {
        content: url(static/images/assets/stake-now-hr.svg);
        position: absolute;
        left: -110px;
        top: -30px;
      }
    }
  `}
`;
