import styled from "styled-components";
import { theme, media } from "@styles";

const { colors } = theme;

export const MemberCSS = styled.div`
  border: 1px solid ${colors.white};
  border-radius: 1rem;
  background-color: ${colors.white};
  filter: drop-shadow(0px 10px 40px rgba(41, 41, 42, 0.1));

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;

  img {
    border-radius: 50%;
    object-fit: cover;
    width: 156px;
    height: 156px;
  }

  .name {
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
  }

  .position {
    font-size: 0.9rem;
    margin-bottom: 0.1rem;
    color: ${colors.gray400};
  }
  ${media.bigDesktop`
    padding: 2rem 0 1.5rem 0;
  `}
`;

export const SocialMediaContainerCSS = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 1rem;
    margin-right: 0.3rem;
    path {
      transition: 0.2s;
      fill: ${colors.gray400};
    }

    &:hover {
      path {
        fill: ${colors.forboleRed};
      }
    }
  }
`;
