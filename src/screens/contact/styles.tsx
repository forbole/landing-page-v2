import styled from "styled-components";
import { media } from "@styles";

export const ContactPageCSS = styled.div`
  .background {
    background: linear-gradient(
        0deg,
        rgba(63, 0, 90, 0.68),
        rgba(0, 0, 186, 0.68)
      ),
      url("forbole_background/contact_us.png");
    height: 50vh;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 170vh;
  ${media.bigDesktop`
  .background{
    align-items: center;
    height: 50vh;
  }
  height: 100vh;
  .wrapper {
    display: grid;
    grid-template-columns: 60% 40%;
    margin: 2em 15em 2em;
  }
  `}
`;
