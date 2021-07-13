import styled from "styled-components";
import { mixins, media, theme } from "@styles";

const { colors } = theme;

export const BlogPostCSS = styled.div`
  ${mixins.mobilePadding}
  padding-top: 4rem;
  display: grid;
  grid-gap: 20px;
  width: 100%;

  ${media.bigDesktop`
    padding: 0;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    grid-gap: 30px 20px;
    div.main {
      grid-column: 1 / span 2;
    }
  `}
`;

export const BlogContainerCSS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  flex: 1;

  .ui.button {
    background-color: transparent;
    color: ${colors.forboleRed};
  }

  .ui.pagination.menu {
    display: none;
    margin: 2rem 0;
  }

  .ui.pagination.menu {
    display: inline-flex;
  }
  .ui.menu {
    background: transparent;
    border: none;
    box-shadow: none;
    border-radius: none;
    margin-right: 0.1rem;
    // padding: 15px;
    .active.item {
      background: rgba(189, 8, 28, 1);
      color: rgb(255, 255, 255);
    }
    .item {
      margin: 2px;
      border-radius: 4px;
    }
    > .item:first-child {
      background: #e2e2e2;
    }
    > .item:nth-child(2) {
      background: #e2e2e2;
    }
    > .item:last-child {
      background: #e2e2e2;
    }
    > .item:nth-last-child(2) {
      background: #e2e2e2;
    }
  }
  .ui.menu .item:before {
    background: transparent;
  }

  ${media.tablet`
    .ui.pagination.menu {
      display: inline-flex;
    }
    .ui.menu {
      background: transparent;
      border: none;
      box-shadow: none; 
      border-radius: none;
      margin-right: 0.1rem;
      padding: 5px;
      .active.item {
        background: rgba(189, 8, 28, 1);
        color: rgb(255, 255, 255);
      }
      .item {
        margin: 5px;
        border-radius: 4px;
      }
      > .item:first-child {
        background: #E2E2E2;
      }
      > .item:nth-child(2) {
        background: #E2E2E2;
      }
      > .item:last-child {
        background: #E2E2E2;
      }
      > .item:nth-last-child(2) {
        background: #E2E2E2;
      }
    }
    .ui.menu .item:before {
      background: transparent;
    }
  `}
`;
