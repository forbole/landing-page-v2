import React from "react";
import MooncakeDetails from "../mooncake_details";
import MooncakeImg from "../mooncake_img";
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
          <MooncakeDetails />
          <MooncakeImgCSS>
            <MooncakeImg />
          </MooncakeImgCSS>
        </MooncakeContentCSS>
      </MooncakeBodyCSS>
    </DesktopCSS>
  );
};

export default Desktop;
