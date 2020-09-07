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
