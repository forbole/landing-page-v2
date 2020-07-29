import styled from "styled-components";
import { theme, mixins, media } from "@styles";

const { colors } = theme;
export const CalculateRewardsCSS = styled.div`
  background: ${colors.gray100};

  ${media.bigDesktop`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5rem;
  `}
`;

export const ParagraphTitleCSS = styled.p`
  color: ${colors.gray600};
  margin-bottom: 0.6rem;
  font-weight: 300;
`;

export const ContentCSS = styled.div`
  background white;
  ${mixins.mobilePadding}
  h2 {
    font-weight: 400;
    text-align: left;
  }
  ${media.bigDesktop`
    ${mixins.desktopMaxWidth}
    width: 100%;
    margin-top: -5rem;

    .main-content {
      display: grid;
      grid-template-columns: repeat(2, minmax(100px, 1fr));
      grid-gap: 50px;
    }
  `}
`;
