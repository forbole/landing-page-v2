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
  justify-content: space-evenly;
  padding: 1rem 0.5rem;

  .image-container {
    > div {
      position: unset !important;
    }

    .image {
      display: block;
      position: relative !important;
      border-radius: 50%;
      height: 100px !important;
      width: 100px !important;
      object-fit: cover;
    }
  }

  .name {
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    font-size: 0.8rem;
    text-align: center;
  }

  .position {
    font-size: 0.6rem;
    margin-bottom: 0.1rem;
    color: ${colors.gray400};
    text-align: center;
  }
  ${media.tablet`
    .image-container {
      .image {
        width: 136px !important;
        height: 136px !important;
      }
    }
    .name {
      font-size: 1.1rem;
    }
    .position {
      font-size: 0.9rem;
    }
  `}
  ${media.bigDesktop`
    padding: 2rem 0 1.5rem 0;
    .image-container {
      .image {
        width: 156px !important;
        height: 156px !important;
      }
    }
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
