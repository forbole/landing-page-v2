import styled from "styled-components";
import { mixins, theme } from "@styles";

const { colors } = theme;

export const ForboleStakesCSS = styled.div`
  ${mixins.cancelMobileParentPaddingAndInject};
  height: 100vh;
  background-image: url("images/assets/stake_now_bg.svg");
  background-position: center center;
  background-repeat: no-repeat, repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    color: white;
  }

  hr {
    display: block;
    border: 0;
    border-top: 1px solid ${colors.gray600};
    margin: 1em 0;
    padding: 0;
  }
`;

export const StakesDetailsContainerCSS = styled.div`
  width: 100%;
`;
