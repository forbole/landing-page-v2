import styled from "styled-components";
import { theme } from "@styles";

const { colors } = theme;

export const AuthorCSS = styled.div`
  display: flex;
  margin-bottom: 1rem;
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    object-fit: cover;
  }

  .content {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      line-height: 1;
      margin-bottom: 0;

      &.name {
        font-weight: 500;
      }

      &.date {
        color: ${colors.gray600};
      }
    }
  }
`;
