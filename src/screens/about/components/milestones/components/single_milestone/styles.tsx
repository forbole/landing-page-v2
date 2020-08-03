import styled from "styled-components";
import { theme, media } from "@styles";

const { colors } = theme;

export const SingleMilestoneCSS = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

  .date {
    margin-bottom: 0;
  }

  .badge-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    svg {
      margin-right: 0.5rem;
      width: 20px;
      min-width: 20px;
      height: 20px;
      path {
        fill: ${colors.red};
      }
    }
  }
  h4 {
    font-weight: 500;
    font-size: 1.2rem;
  }

  ${media.tablet`
    flex-direction: row;

    .date {
      min-width: 10%;
      text-align: right;
      margin-right: 1rem;
    }
  `}

  ${media.tablet`
    .date {
      min-width: 15%;
    }
  `}
`;
