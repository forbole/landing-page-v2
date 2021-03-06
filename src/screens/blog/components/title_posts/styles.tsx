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

  h3 {
    margin-bottom: 0rem;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid rgba(206, 206, 206, 1);
  }

  ${media.bigDesktop`
    width: 100%;
    border: 1px solid rgba(206, 206, 206, 1);
    border-radius: 8px;
    padding: 0;
    li {
      padding: 1rem 1.5rem;
      transition: 0.2s;
      border-bottom: 1px solid rgba(206, 206, 206, 1);
      &:hover {
        cursor: pointer;
        background: #f5f7fa;
      }
    }
      a:last-child > li {
        border-bottom: 0px;
      }
  `}
`;
