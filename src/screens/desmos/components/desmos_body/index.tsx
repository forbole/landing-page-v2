import React from "react";
import { screenSize } from "@styles";
import getWindowSize from "@utils/getScreenSize";
import { Desktop, Mobile } from "./components";

const DesmosBody = () => {
  const { width } = getWindowSize();

  if (width && width > screenSize.bigDesktop) {
    return <Desktop />
  }
  return (
    <Mobile />
  );
};

export default DesmosBody;
