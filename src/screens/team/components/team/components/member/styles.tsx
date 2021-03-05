import styled from "styled-components";
import { theme } from "@styles";

const { colors } = theme;

export const MemberCSS = styled.div`
  img {
    object-fit: cover;
    height: 225px;
    width: 100%;
  }

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
      transition: 0.2s;
      fill: ${colors.gray600};
    }

    &:hover {
      path {
        fill: ${colors.forboleRed};
      }
    }
  }
`;
