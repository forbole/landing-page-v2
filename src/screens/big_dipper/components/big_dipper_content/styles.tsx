import styled from "styled-components";
import { mixins, theme, media } from "@styles";

const { colors } = theme;

export const BigDipperContentCSS = styled.div`
  ${mixins.mobilePadding}
  ${mixins.flexCenter}
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  width: 100%;
  .image {
      padding: 1rem;
  }
  img {
    border-radius: 0.5rem;
    -webkit-filter: drop-shadow(1rem 1rem 2rem rgba(0, 0, 0, 0.2));
    filter: drop-shadow(1rem 1rem 2rem rgba(0, 0, 0, 0.2));
    margin-bottom: 2.5rem;
  }
  p {
    margin-bottom: 2em;
  }
  .bolded {
    font-weight: bold;
  }
  ${media.tablet`
  .image {
    padding: 2rem;
  }
  p {
    font-size: 1rem;
  }
  `}
  ${media.bigDesktop`
  ${mixins.flexCenter}
  ${mixins.desktopBottomPadding}
  padding-top: 5rem;
  min-height: 25rem;
  .desktopWrapper {
    ${mixins.desktopMaxWidth}
    ${mixins.flexCenter}
    flex-direction: row-reverse;
    width: 100%;
    display: flex;
  }
  p {
    display: flex;
    justify-content: flex-start;
    font-weight: 100;
    font-size: 1rem;
  }
  img {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 0;
  }
  .image {
    padding: 0;
  }
  .content {
    margin-right: 7rem;
    
    p:last-child {
      margin-bottom: 0;
    }
  }
  `}
`;
