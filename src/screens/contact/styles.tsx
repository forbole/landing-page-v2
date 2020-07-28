import styled from "styled-components";
import { media } from "@styles";

export const ContactPageCSS = styled.div`
  margin: 0 -1rem -3rem;
  .wrapper {
    background-color: white;
    padding-bottom: 5rem;
  }
  .left {
    margin-top: -10rem;
  }
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  ${media.bigDesktop`
  width: 100%;
  height: 100vh;
  .wrapper {
    display: grid;
    grid-template-columns: 60% 40%;
    margin: 2em 15em 2em;
    justify-content: center;
    justify-items: end;
    padding-left: 5em;
    .left {
      margin-top: 0;
    }
  }
  
  `}
`;
