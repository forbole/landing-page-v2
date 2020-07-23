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
  }
  .left{
    float: left;
    width: 55%;
    margin: 1em 0 4em 4em;
  }
  .right{
    float: right;
    width: 37%;
    margin: 1em 5.6em 1em 0;
  }
  `}
`;
