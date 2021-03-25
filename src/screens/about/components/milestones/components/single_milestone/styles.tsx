import styled from "styled-components";
import { theme, media } from "@styles";

const { colors } = theme;

export const SingleMilestoneCSS = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 40px 0px rgba(41, 41, 42, 0.1);
  border-radius: 4px;

  p {
    line-height: 1.2rem;
  }

  span > h4 {
    padding-bottom: 0.5rem;
  }

  .date {
    padding-top: 1rem;
    color: ${colors.gray400};
    margin-bottom: 0;
  }

  .badge-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
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
    color: ${colors.forboleRed};
    font-weight: 500;
    font-size: 1.2rem;
  }

  ${media.tablet`
    flex-direction: column;

    .date {
      min-width: 7%;
      text-align: left;
      margin-right: 1rem;
    }
  `}

  ${media.tablet`
    .date {
      min-width: 8%;
      white-space: nowrap;
    }
  `}
`;
