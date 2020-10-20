import styled from "styled-components";
import { media, theme, mixins } from "@styles";

const { colors } = theme;

export const HiringContentCSS = styled.div`
  color: ${colors.white};
  background-color: ${colors.black};
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;

  ${media.bigDesktop`
  display: flex;
  flex-direction: row-reverse;
  min-height: 35rem;
  position: relative;
  `}
`;

export const HiringHeaderCSS = styled.div`
  margin-top: 5.5rem;
  width: 100%;
  flex: 1;
  position: relative;

  img {
    zoom: 0.44;
    object-fit: cover;
    object-position: 48% 52%;
    height: 100%;
    width: 100%;
  }

  .overlay {
    width: 100%;
    height: 100%;
    z-index: 4;
    position: absolute;
    background: -webkit-linear-gradient(
      top,
      rgba(39, 63, 84, 0.5),
      rgba(37, 50, 67, 0.7)
    );
    background: -moz-linear-gradient(
      top,
      rgba(39, 63, 84, 0.5),
      rgba(37, 50, 67, 0.7)
    );
    background: linear-gradient(
      to bottom,
      rgba(39, 63, 84, 0.5),
      rgba(37, 50, 67, 0.7)
    );
  }
  ${media.tablet`
  height: 33rem;
  img {
    zoom: 1.1;
    object-position: 48% 53%;
  }
  `}
  ${media.bigDesktop`
    margin-top: 0;
    padding: 0rem;
    height: 100%;
    width: 40%;
    img {
    zoom: 0.8;
    object-position: 41% 4%;
    }
  `}
`;

export const ContentWrapperCSS = styled.div`
  ${mixins.mobilePadding}
  padding-top: 1rem;
  h1 {
    font-weight: 100;
    margin-bottom: 0.3rem;
  }
  h2 {
    font-weight: 100;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  h3 {
    font-weight: 100;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .ui.red.button {
    background-color: rgba(255, 80, 80, 1);
    font-weight: 100;
    margin-bottom: 3rem;

    &:hover {
      background-color: rgba(255, 165, 0, 1);
    }
  }

  ${media.bigDesktop`
    ${mixins.flexCenter}
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 5rem 3.5rem 3.5rem;
    width: 60%;

    h1 {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      font-weight: 500;
    }
    h2 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        font-weight: 500;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      width: 500px;
    }
  `}
`;
