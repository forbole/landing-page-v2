import styled from "styled-components";
import { mixins, theme, media } from "@styles";

const { colors } = theme;

export const DescriptionCSS = styled.div`
  ${mixins.mobilePadding}
  padding-top: 4rem;

  h2 {
    font-weight: 500;
    margin-bottom: 0;
  }

  .ui.button {
    width: 100%;
    background: ${colors.pink};
    color: white;
    font-weight: 400;
    margin-right: 0;
    margin-top: 0.5rem;
  }

  hr {
    display: none;
  }

  ${media.bigDesktop`
    padding-left: 4rem;
    hr {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid ${colors.red};
      margin: 1em 0;
      padding: 0;
    }

    .ui.button {
      width: auto;
    }
  `}
`;
