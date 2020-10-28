import styled from "styled-components";
import { mixins, theme, media } from "@styles";

const { colors } = theme;

export const EcoSystemProjectsCSS = styled.div`
  ${mixins.mobileLastContainerPadding}
  background: ${colors.gray100};

  ${media.bigDesktop`
    ${mixins.flexCenter}
  `}
`;

export const MainContentCSS = styled.div`
  h3 {
    font-weight: 500;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  p {
    font-size: 0.875rem;
  }
  ${media.bigDesktop`
    ${mixins.desktopMaxWidth}
    width: 100%;

    h3 {
      font-size: 2rem;
    }
  `}
`;

export const ProjectsGridCSS = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-gap: 12px 12px;

  ${media.tablet`
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    grid-gap: 20px;
  `}

  ${media.bigDesktop`
    grid-template-columns: repeat(6, minmax(100px, 1fr));
    grid-gap: 20px;
  `}
`;
