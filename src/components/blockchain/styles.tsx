import styled from "styled-components";
import { media } from "@styles";

export const BlockchainCSS = styled.div`
  background: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 55px;
    filter: drop-shadow(0px 10px 16px rgba(41, 41, 42, 0.1));
  }

  p {
    margin-top: 0.5rem;
    color: rgba(0, 0, 0, 0.87);
  }

  ${media.bigDesktop`
    height: 120px;
    transition: 0.5s ease;

    p {
      transition: 0.2s ease;
    }

    img {
      width: 45px;
      transition: 0.5s ease;
    }

    &:hover {
      cursor: pointer;
      box-shadow: 0px 8px 13px 3px rgba(214, 214, 214, 0.45);
      img {
        width: 55px;
        margin-top: 0.5rem;
      }

      p {
        font-size: 1.1rem;
        margin-top: 0.2rem;
      }
    }
  `}
`;
