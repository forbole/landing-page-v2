import styled from "styled-components";

export const NotFoundCSS = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.9)
    ),
    url("/static/images/assets/404-background.jpeg");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: cover;
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

  img {
    max-width: 300px;
  }
`;
