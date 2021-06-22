import styled from "styled-components";
import { theme } from "@styles";

const { colors } = theme;

export const AuthorCSS = styled.div`
  display: flex;
  margin-bottom: 1rem;
  .image-container {
    > div {
      position: unset !important;
    }

    .image {
      border-radius: 50%;
      object-fit: cover;
      width: 40px !important;
      height: 40px !important;
      min-height: 40px !important;
    }
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
