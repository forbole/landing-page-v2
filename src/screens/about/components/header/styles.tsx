import styled from "styled-components";
import { CoverCSS } from "@styles/components";
import { theme, media, mixins } from "@styles";
const { headerMargin } = theme;

export const HeaderCSS = styled(CoverCSS)`
  background: rgba(55, 68, 172, 1);
  position: relative;
  .background-image-container {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -1.5rem;
    width: 100%;

    img {
      opacity: 0.6;
      mix-blend-mode: hard-light;
    }
  }

  .content-container {
    z-index: 1;
    h2 {
      color: white;
      margin-bottom: ${headerMargin.small};
      font-weight: 400;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    p {
      color: white;
    }

    .circle {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: white;
      display: inline-block;
      margin: 0 0.5rem;
    }
  }

  ${media.tablet`
    .background-image-container {
      img {
        width: 70%;
      }
    }
  `}

  ${media.bigDesktop`
    ${mixins.flexCenter}
    background: rgba(27, 33, 185, 1);
    height: 30vh;

    .content-container {
      ${mixins.desktopMaxWidth}
      width: 100%;

      h2 {
        font-size: 3.75rem;
        margin: 0;
      }
      p {
        font-size: 1.25rem;
      }
    }

    .background-image-container {
      justify-content: flex-end;
      img {
        width: 35%;
      }
    }
  `}
`;
