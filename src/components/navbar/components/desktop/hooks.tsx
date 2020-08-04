import { useEffect, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export const useDesktopNavHook = () => {
  const [displayBackground, setDisplayBackground] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y == 0 && displayBackground) {
      setDisplayBackground(false);
    }
    if (currPos.y < 0 && !displayBackground) {
      setDisplayBackground(true);
    }
  });

  return {
    displayBackground,
  };
};
