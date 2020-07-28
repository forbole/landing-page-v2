import styled from "styled-components";
import { mixins } from "@styles";

export const ForboleStakesCSS = styled.div`
  ${mixins.cancelMobilePadding};
  height: 100vh;
  background-image: url("images/assets/stake_now_bg.svg");
  background-position: center center;
  background-repeat: no-repeat, repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: white;
  }
`;
