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

  .wrapper {
    ${mixins.desktopMaxWidth}
    margin-top: -200px;
    background: none;
    display: grid;
    grid-template-columns: 60% 40%;
    justify-content: center;
    .left {
      margin-top: 0;
    }
  }

  `}
`;
