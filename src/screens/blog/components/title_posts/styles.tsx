import styled from "styled-components";
import { mixins, theme, media } from "@styles";

const { colors } = theme;

export const TitlePostsCSS = styled.ul`
  ${mixins.mobilePadding}
  padding-top: 0;
  list-style-type: none;

  a {
    color: black;
  }

  li {
    padding: 0.7rem 0.5rem;
    border-bottom: 1px solid ${colors.gray100};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${media.bigDesktop`
    width: 100%;
    border: 1px solid ${colors.gray100};
    padding: 0;

    li {
      padding: 1rem 1.5rem;
      transition: 0.2s;
      &:hover {
        cursor: pointer;
        background: #f5f7fa;
      }

      &:last-child {
        border: none;
      }
    }
  `}
`;
