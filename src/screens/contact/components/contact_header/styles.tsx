import styled from "styled-components";
import { theme, media } from "@styles";

const { headerMargin } = theme;

export const ContactHeaderCSS = styled.div`
  width: 100%;
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: flex-start;
  background: linear-gradient(0deg, rgb(32, 6, 105, 0.7), rgb(24, 0, 88, 0.84)),
    url("forbole_background/contact_us.png");
  height: 50vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  h2 {
    color: white;
    font-weight: 300;
    margin-bottom: ${headerMargin.small};
    margin-top: 4rem;
    margin-left: 1.5rem;
  }
  p {
    color: white;
    font-weight: 100;
    margin-left: 1.5rem;
  }
  ${media.bigDesktop`
  padding: 1rem 15rem 1rem;
  .background{
    align-items: center;
    height: 50vh;
  }`}
  ${media.tablet`
  h2 {
    margin-top: 15rem;
      margin-left: 3rem;
  }
  p {
      margin-left: 3rem;
  }`}
`;
