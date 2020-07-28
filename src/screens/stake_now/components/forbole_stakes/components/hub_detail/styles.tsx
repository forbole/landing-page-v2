import styled from "styled-components";

const PINK = `rgba(253, 103, 103, 1)`;

export const HubDetailCSS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  .title {
    &.main {
      // border-left: solid 3px ${PINK};
      padding-left: 0.4rem;
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
`;

export const StatDetailsCSS = styled.div`
  .atom {
    &.main {
      font-size: 1.15rem;
    }
  }

  p {
    text-align: right;
    margin-bottom: 0;
  }
`;
