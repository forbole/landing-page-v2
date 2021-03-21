import styled from "styled-components";
import { mixins, media, theme } from "@styles";

const { colors } = theme;

export const MilestonesCSS = styled.div`
  ${mixins.mobilePadding}
  padding: 2.5rem 0.5rem 1.5rem;
  background: ${colors.white};

  .timeline {
    background-image: url("static/images/assets/timeline.png");
    background-size: 1%;
    background-repeat: repeat-y;
  }

  h3 {
    max-width: 1200px;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  ${media.bigDesktop`
    ${mixins.flexCenter}
    min-height: 100vh;
    h3 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
  `}
`;

export const MilestonesGridCSS = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  .date {
    margin-bottom: 0.125rem;
  }

  ${media.tablet`
    margin-top: 1rem;
  `}

  ${media.bigDesktop`
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px 40px;
  `}
`;

export const TimelineCSS = styled.div`
  padding: 0rem 1rem;
  display: flex;
  flex-direction: row;
  background-image: url("static/images/assets/timeline.png");
  background-size: 1%;
  background-repeat: repeat-y;
`;

export const YearCSS = styled.div`
  display: flex;
  flex-direction: row;
  .yearimg {
    width: 16px;
    height: 16px;
  }
`;
