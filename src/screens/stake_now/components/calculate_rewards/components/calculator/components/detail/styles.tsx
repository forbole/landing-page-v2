import styled from "styled-components";
import { media } from "@styles";

export const DetailCSS = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 1.2rem;

  .tokens {
    margin-right: 0.6rem;
  }

  p {
    margin-bottom: 0;
  }
  div {
    p {
      text-align: right;
    }
  }

  ${media.tablet`
    justify-content: start;
    align-items: start;
    flex-direction: column;

    .tokens {
      font-size: 2rem;
    }

    div {
      p {
        text-align: left;
      }
    }
  `}
`;
