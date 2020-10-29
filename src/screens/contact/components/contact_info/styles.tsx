import styled from "styled-components";
import { media, theme } from "@styles";

const { colors } = theme;

export const ContactInfoCSS = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  h2 {
    color: rgba(255, 255, 255, 1);
    font-weight: 400;
    font-size: 1.4rem;
    text-align: left;
    width: 100%;
  }
  p {
    color: ${colors.white};
    font-weight: 400;
    font-size: 1rem;
  }

  .container {
    padding-bottom: 1rem;
  }

  .location,
  .email {
    margin-top: 0.3rem;
    float: left;
  }
  .address,
  .emailInfo {
    padding-left: 2rem;
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
    padding-top: 1.3rem;
    svg path:hover {
      fill: rgba(250, 250, 250, 1);
      cursor: pointer;
    }
    a {
      padding-right: 0.5rem;
    }
    svg {
      width: 24px;
      height: 24px;
    }
  }
  ${media.bigDesktop`
  padding-top: 0;
  height: 100%;
  .content-container {
    display: flex;
    align-items: start;
    justify-content: space-around;
    flex-direction: column;
    flex: 1;
  }

  .container {
    position: relative;
    svg {
      margin: 0;
      position: absolute;
      top: 5px;
    }
  }
  .ui.segment {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .ui.raised.raised.segment {
    padding: 3.5rem;
    height: 100%;
  }
  .address,
  .emailInfo {
    width: 100%;
    font-size: 1.1rem;
  }
  .socialMedia {
    a {
      padding-right: 1.4rem;
    }
}`}
`;
