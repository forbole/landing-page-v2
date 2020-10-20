import React from "react";
import { HeroContent } from "../hero";
import { HiringContent } from "../hiring";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={8000}
  >
    <div>
      <HeroContent />
    </div>
    <div>
      <HiringContent />
    </div>
  </AutoplaySlider>
);
