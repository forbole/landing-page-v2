import styled from "styled-components";

export const NotFoundCSS = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url("forbole_background/404_background.jpeg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;

  .content {
    margin-top: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h3 {
    color: white;
    margin-bottom: 1rem;
  }

  p {
    color: white;
    text-align: center;
  }
`;
