import styled from "styled-components";
import { mixins, theme, media } from "@styles";

const { colors } = theme;

export const EcoProjectsCSS = styled.div`
  ${mixins.mobileLastContainerPadding}
  background: ${colors.white};

  ${media.bigDesktop`
    ${mixins.flexCenter}
  `}
`;

export const MainContentCSS = styled.div`
  h3 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
  }
  ${media.tablet`
  h3 {
    font-size: 2rem;
  }
  `}
  ${media.bigDesktop`
    ${mixins.desktopMaxWidth}
    width: 100%;
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
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    grid-gap: 20px;
  `}

  ${media.bigDesktop`
    grid-template-columns: repeat(10, minmax(100px, 1fr));
    grid-gap: 20px;
  `}
`;
