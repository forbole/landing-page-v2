import styled from "styled-components";
import { theme } from "@styles";

const { colors } = theme;

export const MemberCSS = styled.div`
  .name {
    font-weight: 500;
    margin-bottom: 0;
  }

  .position {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }}
`;

export const SocialMediaContainerCSS = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 23px;
    margin-right: 0.3rem;
    path {
      fill: ${colors.gray600};
    }

`;
