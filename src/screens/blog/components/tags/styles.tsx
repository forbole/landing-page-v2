import styled from "styled-components";
import { mixins, media, theme } from "@styles";
import { generateBackgroundColor } from "./config";

const { colors } = theme;

export const TagsCSS = styled.div`
  ${mixins.mobilePadding}
  padding-top: 1.5rem;

  h3 {
    font-weight: 500;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
  }

  ${media.bigDesktop`
    margin-top: 2rem;
    border: solid 1px ${colors.gray100};
  `}
`;

export const ListCSS = styled.li<any>`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: ${(props) => generateBackgroundColor(props.index)};
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  color: white;
`;
