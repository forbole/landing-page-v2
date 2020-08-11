import styled from "styled-components";
import { theme } from "@styles";

const { colors } = theme;

export const SocialMediaCSS = styled.div`
  svg {
    margin-right: 1rem;
    path {
      fill: ${colors.gray400};
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
