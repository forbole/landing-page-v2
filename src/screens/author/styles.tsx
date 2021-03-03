import styled from "styled-components";
import { MaxWidthContainerCSS as MaxWidthCSS } from "@styles/components";
import { mixins, theme, media } from "@styles";

const { colors } = theme;

export const MaxWidthContainerCSS = styled(MaxWidthCSS)`
  width: 100%;
  flex-direction: column;
  ${media.bigDesktop`
    ${mixins.mobileHorizontalPadding}
    ${mixins.mobileBottomPadding}
    margin-top: 7.5rem;
    display: flex;
    max-width: 900px;
  `}
`;

export const TagTitlePostsCSS = styled.ul`
  ${mixins.mobilePadding}
  padding: 2.5rem 1.5rem 3.5rem;
  padding-top: 5rem;
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

export const SideCSS = styled.div`
  display: none;
  .tags-container {
    ${mixins.mobilePadding}
    border: 1px solid rgba(206, 206, 206, 1)
    padding-top: 1.5rem;
  }

  ${media.bigDesktop`
    width: 30%;
    min-width: 300px;
    margin-left: 2rem;

    .tags-container {
      margin-top: 2rem;
      border: solid 1px ${colors.gray100};
    }
  `}
`;

export const BlogCSS = styled.div`
  ${media.bigDesktop`
    ${mixins.flexCenter}
  `}
`;

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

      &.bio {
        color: ${colors.gray600};
      }
    }
  }
`;
