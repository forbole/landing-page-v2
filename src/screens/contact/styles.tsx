import styled from "styled-components";
import { media, mixins } from "@styles";

export const ContactPageCSS = styled.div`
  .wrapper {
    background-color: white;
  }

  .left {
    margin-top: -10rem;
  }
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  .wrapper {
    ${mixins.mobileHorizontalPadding}
    ${mixins.mobileBottomPadding}
    width: 100%;
  }

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
    .left {
      margin-top: 0;
    }
  }

  `}
`;
