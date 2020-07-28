import styled from "styled-components";
import { media, mixins } from "@styles";

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
    ${mixins.flexBetween}
  width: 100%;
  height: 100%;
  .wrapper {
    background: none;
    display: grid;
    grid-template-columns: 60% 40%;
    margin: -25rem 15rem 2rem;
    justify-content: center;
    justify-items: end;
    padding-left: 5rem;
    padding-bottom: 10rem;
    .left {
      margin-top: 0;
    }
  }
  
  `}
`;
