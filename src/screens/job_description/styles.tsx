import styled from "styled-components";
import { MaxWidthContainerCSS as MaxWidthCSS } from "@styles/components";
import { mixins, media } from "@styles";

export const JobDescriptionCSS = styled.div`
  ${mixins.flexCenter};
  flex: 1;
`;

export const MaxWidthContainerCSS = styled(MaxWidthCSS)`
  ${media.bigDesktop`
    ${mixins.mobileBottomPadding}
    padding-top: 6.5rem;
    display: flex;
    flex-direction: row-reverse;
  `}
`;
