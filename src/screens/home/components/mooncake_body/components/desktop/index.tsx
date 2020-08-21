import React from "react";
import { MooncakeDetails, MooncakeImg } from "@components";
import {
  DesktopCSS,
  MooncakeContentCSS,
  MooncakeBodyCSS,
  MooncakeImgCSS,
} from "./styles";

const Desktop = () => {
  return (
    <DesktopCSS>
      <MooncakeImgCSS>
        <MooncakeImg />
      </MooncakeImgCSS>
      <MooncakeBodyCSS>
        <MooncakeContentCSS>
          <MooncakeDetails />
        </MooncakeContentCSS>
      </MooncakeBodyCSS>
    </DesktopCSS>
  );
};

export default Desktop;
