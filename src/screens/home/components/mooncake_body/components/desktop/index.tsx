import React from "react";
import { MooncakeDetails, MooncakeImg } from "@components";
import {
  DesktopCSS,
  BackgroundCSS,
  MooncakeContentCSS,
  MooncakeBodyCSS,
  MooncakeImgCSS,
} from "./styles";

const Desktop = () => {
  return (
    <DesktopCSS>
      <BackgroundCSS />
      <MooncakeBodyCSS>
        <MooncakeContentCSS>
          <MooncakeImgCSS>
            <MooncakeImg />
          </MooncakeImgCSS>
          <MooncakeDetails />
        </MooncakeContentCSS>
      </MooncakeBodyCSS>
    </DesktopCSS>
  );
};

export default Desktop;
