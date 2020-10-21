import styled from "styled-components";
import { media } from "@styles";

export const BodyImageContainerCSS = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
  }

  ${media.tablet`
    justify-content: center;
    margin-bottom: 3rem;
    img {
      max-width: 550px;
      margin: 0 0.5rem;
    }
  `}

  ${media.bigDesktop`
    margin-bottom: 0;
    img {
      width: 100%;
      max-width: 600px;
    }
  `}
`;
