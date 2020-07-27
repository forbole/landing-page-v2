import styled from "styled-components";
import { media } from "@styles";

export const BodyImageContainerCSS = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1rem;

  img {
    width: 40%;
  }

  ${media.tablet`
  justify-content: center;
  margin-bottom: 3rem;
    img {
      max-width: 250px;
      margin: 0 0.5rem;
    }
  `}
`;
