import { useState, useEffect } from "react";
import { screenSize } from "@styles";
import useWindowSize from "@utils/get_screen_size";

export const useMobileLoaderHook = () => {
  const { width } = useWindowSize();
  const [loaderWidth, setLoaderWidth] = useState(300);

  useEffect(() => {
    if (width && width >= screenSize.bigDesktop) {
      setLoaderWidth(450);
    }
  }, [width]);

  return {
    loaderWidth,
  };
};
