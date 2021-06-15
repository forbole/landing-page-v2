import styled from "styled-components";
import { media } from "@styles";

export const BlockchainCSS = styled.div`
  .image-container {
    width: 100%;

    > div {
      position: unset !important;
    }

    .image {
      object-fit: contain;
      border-radius: 0.1rem;
      width: 100% !important;
      position: relative !important;
      height: 100% !important;
    }
  }
  height: 46.06px;
  width: 46.06px;
  border-radius: 50%;
  border: 1px solid white;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 10px 20px 0px rgba(41, 41, 42, 0.1);

  img {
    width: 100%;
  }

  p {
    margin-top: 0.5rem;
    color: rgba(0, 0, 0, 0.87);
  }

  ${media.bigDesktop`
    transition: 0.2s ease;
    box-shadow: 0px 10px 20px 0px rgba(41, 41, 42, 0.1);

    p {
      transition: 0.2s ease;
    }

    img {
      width: 45px;
      transition: 0.5s ease;
    }

    &:hover {
      cursor: pointer;
      border-radius: 50%;
      border: 1px solid white;
      width: 50px

      p {
        font-size: 1.1rem;
        margin-top: 0.2rem;
      }
    }
  `}
`;
