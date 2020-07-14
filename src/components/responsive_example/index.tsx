import React from "react";
import { screenSize } from "@styles";
import getWindowSize from "@utils/getScreenSize";

const ResponseExample = () => {
  const { width } = getWindowSize();
  if (width <= screenSize.tablet) {
    return <div>mobile to tablet</div>;
  }
  return <div>tablet and up</div>;
};

export default ResponseExample;
