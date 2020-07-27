import { css } from "styled-components";

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  desktopMaxWidth: css`
    max-width: 1200px;
  `,
  cancelMobilePadding: css`
    margin: 0 -1rem -3rem;
  `,
  cancelMobileHorizontalPadding: css`
    margin-left: -1rem;
    margin-right: -1rem;
  `,
};

export default mixins;
