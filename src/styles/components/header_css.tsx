import styled from "styled-components";
import { theme } from "@styles";

const { padding } = theme;

const CoverCSS = styled.div`
  padding-left: ${padding.mobileHorizontal};
  height: 50vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 275px;

  .content-container {
    display: flex;
    flex-direction: column;
  }
`;

export default CoverCSS;
