import styled from "styled-components";
import { mixins, theme, media } from "@styles";

const { colors } = theme;

export const BDHeaderCSS = styled.div`
  ${mixins.mobileHorizontalPadding}
  ${mixins.mobileBottomPadding}
  padding-top: 5rem;
  background-color: ${colors.red};
  display: flex;
  flex-direction: column;
  width: 100%;
  a {
    color: ${colors.white};
    padding-right: 0.5rem;
  }
  .socialMedia {
    padding-top: 1rem;
    a {
      padding-right: 1rem;
    }
  }
  h1,
  h2,
  span {
    color: ${colors.white};
    margin-bottom: 0.5rem;
    font-weight: 100;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  svg > path {
    fill: white;
  }
  ${media.bigDesktop`
  min-height: 25rem;
  ${mixins.flexCenter}
  .desktopWrapper {
    ${mixins.desktopMaxWidth}
    flex-direction: column;
    width: 100%;
    display: flex;
  }
  h1,
  h2,
  span {
    ${mixins.desktopMaxWidth}
    margin-bottom: 0;
  }
    .wrapper {
    ${mixins.flexBetween}
        .socialMedia{
            padding-top: 0;
        }
    }
  `}
`;
