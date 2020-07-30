import styled from "styled-components";
import { media, theme } from "@styles";

const { colors } = theme;

export const ContactInfoCSS = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  h2 {
    color: rgba(255, 255, 255, 1);
    font-weight: 400;
    font-size: 1.375em;
    text-align: left;
    width: 100%;
    margin-bottom: 0.5rem;
  }
  p {
    color: ${colors.white};
    font-weight: 400;
    font-size: 0.9em;
  }
  .location,
  .email {
    margin-top: 0.2em;
    float: left;
  }
  .address,
  .emailInfo {
    margin-left: 2em;
  }
  .ui.segment {
    width: 100%;
    border-radius: 0;
    box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  }
  .ui.raised.raised.segment {
    background-color: rgba(16, 113, 227, 1);
    box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
      0 2px 10px 0 rgba(34, 36, 38, 0.15);
    border: none;
    padding: 2rem 1.5rem;
  }
  path {
    fill: rgba(255, 255, 255, 1);
  }
  .socialMedia {
    margin-top: 1.3rem;
    svg path:hover {
      fill: rgba(250, 250, 250, 1);
      cursor: pointer;
    }
    a {
      padding-right: 0.5rem;
    }
  }
  ${media.bigDesktop`
  margin-top: 0;
  h2{
    padding-top: 2em;
    padding-bottom: 2em;
    padding-left: 1.5em;
  }
  div {
      padding: 2em;
  }
  .ui.form {
    width: 100%;
    margin-top: 0;
  }
  .ui.segment {
    height: 557px;
  }
  .address,
  .emailInfo {
    margin-left: 0.5em;
    width: auto;
    margin: 0 2em 2em 5em;
    font-size: 1.1rem;
  }
  .location {
      margin: 0.2em 2em 1em;
      float: left;
  }
  .email {
    margin: 0.2em 2em 3em;
  }

  .socialMedia {
    margin-left: 2em;
    margin-top: 4em;
    a {
      padding-right: 1.5vw;
    }
}`}
`;
