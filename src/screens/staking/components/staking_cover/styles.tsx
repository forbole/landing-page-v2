import styled from "styled-components";
import { CoverCSS } from "@styles/components";
import { theme, media, mixins } from "@styles";
const { headerMargin } = theme;

export const StakingCoverCSS = styled(CoverCSS)`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.68),
      rgba(0, 0, 0, 0.68)
    ),
    url("forbole_background/staking.png");
  background-position: 55% bottom;

  .content-container {
    h2 {
      color: white;
      margin: 3rem 0 ${headerMargin.small};
      font-weight: 400;
    }

    p {
      color: white;
      margin-bottom: 2rem;
    }

    .social-media-container {
      margin-bottom: 0.5rem;
      a {
        margin-right: 0.5rem;

        svg {
          path {
            fill: white;
          }
        }
      }
    }
  }

  ${media.tablet`
    background-image: url("forbole_background/staking.png");
  `}

  ${media.bigDesktop`
    height: 30vh;
    background-position: 55% center;
    padding: 0;
    justify-content: center;

    .content-container {
      ${mixins.desktopMaxWidth}
      width: 100%;
      h2 {
        font-size: 3rem;
      }
    }
  `}
`;
