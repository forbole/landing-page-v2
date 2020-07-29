import styled from "styled-components";
import { theme, mixins } from "@styles";

const { colors } = theme;
export const CalculateRewardsCSS = styled.div`
  ${mixins.mobilePadding}
  background: white;

  h2 {
    font-weight: 400;
    text-align: left;
  }

  p {
    &.select-network {
      color: ${colors.gray600};
      margin-bottom: 0.6rem;
      font-weight: 300;
    }
  }
`;
