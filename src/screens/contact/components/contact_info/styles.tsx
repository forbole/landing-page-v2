import styled from "styled-components";
import { theme, media } from "@styles";

const { headerMargin } = theme;

export const ContactInfoCSS = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  h2 {
    padding-top: 1em;
    padding-bottom: 1em;
    color: rgba(255, 255, 255, 1);
    font-weight: 400;
    font-size: 1.375em;
    height: 1vh;
    text-align: left;
    width: 100%;
  }
  p {
    color: rgba(255, 255, 255, 1);
    font-weight: 400;
    font-size: 0.9em;
    line-height: 1.5em;
  }
  .location,
  .email {
    margin-top: 0.2em;
    float: left;
  }
  .address,
  .emailInfo {
    margin-left: 2em;
    width: 70vw;
  }
  .ui.form {
    width: 90vw;
  }
  .ui.segment {
    border-radius: 0;
    box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  }
  .ui.raised.raised.segment {
    background-color: rgba(16, 113, 227, 1);
    box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
      0 2px 10px 0 rgba(34, 36, 38, 0.15);
    border: none;
  }
  path {
    fill: rgba(255, 255, 255, 1);
  }
  .socialMedia {
    height: 26px;
    width: 100%;
    padding: 0px;
    margin-top: 1em;
    margin-bottom: 1em;
    svg path:hover {
      fill: rgba(250, 250, 250, 1);
      cursor: pointer;
    }
    a {
      padding-right: 3vw;
    }
  }
  ${media.bigDesktop`
  margin-top: 0;`}
`;
