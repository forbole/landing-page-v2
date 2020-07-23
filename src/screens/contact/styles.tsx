import styled from "styled-components";

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
  height: 200vh;
`;
