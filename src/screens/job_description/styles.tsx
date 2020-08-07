import styled from "styled-components";
import { MaxWidthContainerCSS as MaxWidthCSS } from "@styles/components";
import { mixins } from "@styles";

export const JobDescriptionCSS = styled.div`
  ${mixins.flexCenter};
  flex: 1;
`;

export const MaxWidthContainerCSS = styled(MaxWidthCSS)`

`;
