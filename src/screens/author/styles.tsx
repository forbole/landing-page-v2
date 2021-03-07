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
    max-width: 1100px;
  `}
`;

export const TagTitlePostsCSS = styled.ul`
  ${mixins.mobilePadding}
  padding: 2.5rem 1.5rem 3.5rem;
  padding-top: 5rem;
  list-style-type: none;
  column-gap: 5rem;

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
    border: none;
    display: flex;
    flex-direction: row;
    padding: 0;

    span {
      display: inline-block;
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
  flex-direction: column;
  padding-top: 0.5rem;
  padding-left: 1.5rem;
  img {
    border-radius: 0.5rem;
    width: 120px;
    height: 120px;
    object-fit: cover;
  }

  span {
    padding-top: 1.5rem;
    p {
      margin-bottom: 0rem;
    }
    .name {
      font-size: 1.2rem;
      font-weight: 300;
      color: ${colors.black};
    }
    .position {
      color: ${colors.gray400};
      font-weight: 100;
    }
  }
  ${media.tablet`
    padding-left: 2rem;
  `}
  ${media.bigDesktop`
    padding-left: 0;
  `}
`;
