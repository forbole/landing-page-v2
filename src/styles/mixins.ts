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
  // the max width content can show on desktop
  desktopMaxWidth: css`
    max-width: 1200px;
  `,
  // general padding wrapper across all components
  mobilePadding: css`
    padding: 1.5rem;
  `,
  mobileLastContainerPadding: css`
    padding: 1.5rem 1.5rem 3rem;
  `,
  // used for containers that require custom or no horizontal padding
  mobileVerticalPadding: css`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  `,
  // used for containers that require custom or no vertical padding
  mobileHorizontalPadding: css`
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  `,
  // Used for the last container right before footer
  mobileBottomPadding: css`
    padding-bottom: 5rem;
  `,
  desktopContainerPadding: css`
    padding: 1rem;
  `,
};

export default mixins;
