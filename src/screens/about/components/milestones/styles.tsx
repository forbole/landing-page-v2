import styled from "styled-components";
import { mixins, theme } from "@styles";
import { MaxWidthContainerCSS as MaxWidthCSS } from "@styles/components";

const { colors } = theme;

export const MilestonesCSS = styled.div`
  ${mixins.mobilePadding}
  background: rgba(244, 251, 255, 1);

  h3 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
`;

export const MilestonesGridCSS = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
`;

export const SingleMilestoneCSS = styled.div`
  margin-bottom: 1rem;

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
`;
