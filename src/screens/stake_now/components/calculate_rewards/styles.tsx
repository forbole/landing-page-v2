import styled from "styled-components";
import { theme } from "@styles";

const { colors } = theme;
export const CalculateRewardsCSS = styled.div`
  background: white;
  padding-top: 2rem;

  h2 {
    font-weight: 400;
    text-align: left;
  }

  p {
    &.select-network {
      color: ${colors.gray600};
    }
  }
`;
