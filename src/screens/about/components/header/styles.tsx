import styled from "styled-components";
import { CoverCSS } from "@styles/components";
import { theme, media, mixins } from "@styles";
const { colors, headerMargin } = theme;

export const HeaderCSS = styled(CoverCSS)`
  padding: 1.5rem;
  background: ${colors.forboleRed};
  background-image: url("/static/images/assets/about-background.png");
  background-position: 85% bottom;
  background-size: 200%;
  background-repeat: no-repeat;

  img {
    opacity: 1;
    //mix-blend-mode: hard-light;
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
      font-size: 1.875rem;
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
  `}

  ${media.bigDesktop`
    ${mixins.flexCenter}
    align-items: flex-start;
    padding: 8rem 0rem;
    height: 70vh;
    background-position: 85% bottom;
    background-size: cover;
    position: relative;
    z-index: -1;

    .content-container {
      ${mixins.desktopMaxWidth}
      // position: absolute;
      // bottom: 0rem;
      
      width: 100%;
      h2 {
        font-size: 3.75rem;
        margin: 0;
      }
      p {
        font-size: 1.25rem;
      }
    }
  `}
`;
