import styled from "styled-components";
import { mixins, theme, media } from "@styles";

const { colors } = theme;

export const BlockchainProjectsCSS = styled.div`
  ${mixins.mobileLastContainerPadding}
  background: transparent;

  ${media.bigDesktop`
    ${mixins.flexCenter}
  `}
`;

export const MainContentCSS = styled.div`
  h3 {
    font-weight: 400;
    font-size: 1.25rem;
    color: ${colors.forboleRed};
  }

  p {
    font-size: 0.9rem;
  }
  ${media.tablet`
  h3 {
    font-size: 2rem;
  }
  `}
  ${media.tablet`
    padding: 2rem 5rem;
  `}
  ${media.bigDesktop`
    ${mixins.desktopMaxWidth}
    width: 100%;
    background: ${colors.white};
    padding: 2rem;
    box-shadow: 0px 10px 40px rgba(41, 41, 42, 0.1);
    border-radius: 8px;
  `}
`;

export const ProjectsGridCSS = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(45px, 1fr));
  grid-gap: 30px 30px;
  a {
    margin: auto;
  }

  ${media.tablet`
    grid-template-columns: repeat(4, minmax(80px, 1fr));
    grid-gap: 20px;
  `}

  ${media.bigDesktop`
    grid-template-columns: repeat(10, minmax(80px, 1fr));
    grid-gap: 20px;
  `}
`;
