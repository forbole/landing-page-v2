import styled from "styled-components";
import { mixins, media, theme } from "@styles";

const { colors } = theme;

export const WhatWeDoCSS = styled.div`
  ${mixins.mobilePadding}
  min-height: fit-content;
  .max-width-container {
    min-height: fit-content;
  }

  h3 {
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  p {
    line-height: 1.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ${media.tablet`
    p {
      margin-bottom: 0.5rem;
    }
  `}

  ${media.bigDesktop`
    ${mixins.flexCenter}
    // position: relative;
    .max-width-container {
      margin-top: -25rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 0 5rem;
      background: ${colors.white};
      border: 1px solid ${colors.white};

      box-shadow: 0px 10px 40px rgba(41, 41, 42, 0.1);
      border-radius: 8px;
      min-height: 70vh;
    }
    
    h3 {
      font-size: 2.5rem;
    }

    p {
      line-height: 1.75rem;
      flex-direction: column;
      align-items: center;
      margin-top: -2rem;
    }

    .lastP {
      padding-bottom: 3rem;
    }

    ul {
      padding-top: 3rem;
      list-style-type: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      .title {
        font-weight: 500;
        font-size: 1.25rem;
      }
    }

    .max-width-container {
      ${mixins.desktopMaxWidth}
      width: 100%;
    }
  `}
`;

export const PillarCSS = styled.li`
  .title {
    font-weight: 400;
  }

  ${media.bigDesktop`
    .title {
      font-weight: 600;
    }
  `}
`;
