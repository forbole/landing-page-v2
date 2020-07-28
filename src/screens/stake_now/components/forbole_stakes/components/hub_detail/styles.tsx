import styled from "styled-components";

const PINK = `rgba(253, 103, 103, 1)`;

export const HubDetailCSS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  .title {
    &.main {
      border-left: solid 3px ${PINK};
      padding-left: 0.4rem;
    }
  }
`;

export const StatDetailsCSS = styled.div`
  .atom {
    &.main {
      font-size: 1.1rem;
      font-weight: 600;
    }
  }

  p {
    text-align: right;
    margin-bottom: 0;
  }
`;
