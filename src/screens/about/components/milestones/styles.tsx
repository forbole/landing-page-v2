import styled from "styled-components";
import { mixins, media, theme } from "@styles";
import { ITimelineCSS } from "./interfaces";

const { colors } = theme;

export const MilestonesCSS = styled.div`
  ${mixins.mobilePadding}
  padding: 2.5rem 0.5rem 1.5rem;
  background: ${colors.white};

  h3 {
    max-width: 1200px;
    font-weight: 500;
    margin-bottom: 2rem;
    padding-left: 1rem;
  }

  ${media.bigDesktop`
    ${mixins.desktopLastContainerPadding}
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    h3 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      width: 100%;
    }
  `}
`;

export const MilestonesGridCSS = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  padding: 0 1rem;
  .date {
    margin-bottom: 0.125rem;
  }

  ${media.tablet`
    margin-top: 1rem;
  `}

  ${media.bigDesktop`
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px 40px;
    padding: 0 3rem;
  `}
`;

export const TimelineCSS = styled.div<ITimelineCSS>`
  display: flex;
  flex-direction: column;
  background-image: url("static/images/assets/timeline.png");
  background-size: 1%;
  background-repeat: no-repeat;
  background-position: left 5%;
  padding-bottom: 1rem;
  & :last-of-type {
    background-image: none;
  }
  ${media.tablet`
    background-size: 0.5%;
    padding-bottom: 0;
  `}
  ${media.bigDesktop`
    background-size: 0.25%;
    display: ${(props) => (props.year ? "flex" : "none")};
    position: relative;
    background-clip: border-box;
    background-position: left 1%;
    &.firstMilestone {
      background-size: 0.25%;
      background-repeat: no-repeat;
      display: flex;
      width: 1200px;
      background-position: left 130px;
    }
    &.lastMilestone {
      background-size: 0.25%;
      background-image: url(static/images/assets/timeline.png);
      background-repeat: no-repeat;
      background-position: left -1775px;
    }
  `}
`;

export const YearCSS = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 1.5rem;
  padding-bottom: 2rem;
  h3 {
    margin-bottom: 0;
    padding-left: 0.3rem;
    font-size: 1.5rem;
  }
  .dot {
    background: ${colors.white};
    width: 1.25rem;
    height: 1.75rem;
    margin-left: -0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .yearimg {
    width: 16px;
    height: 16px;
  }
  ${media.tablet`
  padding-bottom: 0;
    .yearimg {
      width: 18px;
      height: 18px;
    }
  `}
  ${media.bigDesktop`
    margin-left: -1rem;
    position: absolute;
    top: 50%;
    h3 {
      padding-left: 0;
      background: ${colors.white};
      background-image: none;
      width: fit-content;
      height: 4rem;
      display: flex;
      align-items: center;
    }
    .dot {
      display: none;
    }
  `}
`;
