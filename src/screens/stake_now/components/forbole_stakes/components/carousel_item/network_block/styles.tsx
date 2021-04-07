import styled from "styled-components";
import { Button as SemanticButton } from "semantic-ui-react";
import { theme, media } from "@styles";

const { colors } = theme;

export const BlockCSS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  border-radius: 0.5rem;
  box-shadow: 0px 0.3rem 0.4rem 0px rgba(41, 41, 42, 0.1);
  h3 {
    font-weight: 500;
    margin-bottom: 0;
    font-size: 1.25rem;
  }
  a {
    color: black;
    display: block;
    height: 100%;
  }
  p {
    margin-bottom: 0;
    &.date {
      color: ${colors.gray600};
      font-size: 0.875rem;
      font-weight: 300;
    }
  }
  .content {
    padding: 0.5rem;
    background: white;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  ${media.tablet`

  `}
  ${media.bigDesktop`
    padding: 1rem;
    margin: 0 1rem;
    height: 361px;
    transition: 0.5s ease;

    a {
      display: flex;
      flex-direction: column;
    }

    &:hover {
      .content {
        cursor: pointer;
        margin: 0;
        border-bottom: 5px solid ${colors.red};
        border-radius: 0;
      }
    }

    img {
      border-radius: 0.1rem;
    }
    .content {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      margin: -3rem 1rem;
      border-radius: 0.3rem;
      -webkit-filter: drop-shadow(1rem 1rem 1rem rgba(0, 0, 0, 0.2));
      filter: drop-shadow(0rem 0rem 0.5rem rgba(0, 0, 0, 0.2));
      transition: 0.3s ease;
      min-height: 245px;

      h3 {
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
  `}
`;

export const FlexCSS = styled.div`
  display: flex;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  .title-container {
    color: ${colors.black};
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
    img {
      height: 2.5rem;
      width: 2.5rem;
      object-fit: cover;
    }
  }
`;

export const PercentCSS = styled.div`
  background: ${colors.black};
  border-radius: 1rem;
  padding: 0.1rem 0.7rem;
  color: ${colors.white};
`;

export const Button = styled(SemanticButton)`
  &.ui.button {
    width: 100%;
    height: 2.125rem;
    font-weight: 300;
    background: ${colors.black};
    color: ${colors.white};
    margin-right: 0;
    padding: 0.6875em 0.46em 0.6875em;
  }
`;
