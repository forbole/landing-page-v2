import styled from "styled-components";

export const DesktopCSS = styled.div`
  height: 70vh;
  background-image: linear-gradient(
      0deg,
      rgba(123, 135, 185, 0.33),
      rgba(123, 135, 185, 0.33)
    ),
    url("forbole_background/desmos_hero.png");
  display: flex;
  flex-direction: row-reverse;
`;

export const DesmosBodyCSS = styled.div`
  width: 60%;
  background: white;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: black;
  }

  p {
    color: black;
  }
`;
