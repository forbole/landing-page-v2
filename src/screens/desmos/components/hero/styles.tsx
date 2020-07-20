import styled from "styled-components";

export const HeroCSS = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.68),
      rgba(0, 0, 0, 0.68)
    ),
    url("forbole_background/desmos_hero.png");
  min-height: 50vh;
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: white;
  }

  p {
    color: white;
  }
`;
