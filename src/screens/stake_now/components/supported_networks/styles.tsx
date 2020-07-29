import styled from "styled-components";
import { media, mixins, theme } from "@styles";

const { colors } = theme;
export const SupportedNetworksCSS = styled.div`
  ${mixins.mobileLastContainerPadding}
  background: ${colors.gray100};
`;

export const HeaderContentCSS = styled.div`
  h2 {
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  .terms {
    color: rgba(13, 106, 255, 1);
  }
`;

export const NetworkListCSS = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-gap: 7px 12px;

  ${media.tablet`
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    grid-gap: 20px;
  `}
`;
