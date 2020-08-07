import styled from "styled-components";
import { mixins, media, theme } from "@styles";

const { padding, colors } = theme;

export const SidebarCSS = styled.div`
  ${mixins.mobileHorizontalPadding}
  padding-top: 0.5rem;
  padding-bottom: 3rem;

  ul {
    list-style-type: none;
  }

  li {
    ${mixins.flexBetween}
    margin: 0;
    padding: 0.5rem 0 1rem;

    svg {
      path {
        fill: rgba(0, 0, 0, 0.87);
      }
    }
  }

  a {
    color: rgba(0, 0, 0, 0.87);

    &:hover {
      cursor: pointer;
    }
  }

  hr {
    ${mixins.grayHr}
  }

  ${media.bigDesktop`
    padding: 0;
    min-width: 25%;
    background: ${colors.gray100};
    margin-top: ${padding.mobileVertical};
    li {
      padding: 2rem 1rem;
    }

    hr, svg {
      visibility: hidden;
    }

    ul {

    }

    a:hover {
      li {
        background: rgb(239 239 239);
      }
    }

    a.active li {
      background: white;
      border-left: ${colors.red} solid 4px;
    }

  `}
`;
