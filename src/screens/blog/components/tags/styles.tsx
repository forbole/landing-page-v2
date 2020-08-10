import styled from "styled-components";
import { mixins, media } from "@styles";
import { generateBackgroundColor } from "./config";

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
    padding-left: 0;
    padding-right: 0;
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
