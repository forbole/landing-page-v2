import { useState, useEffect } from "react";
import { screenSize } from "@styles";
import useWindowSize from "@utils/get_screen_size";

export const useMobileNavHook = () => {
  const { width } = useWindowSize();
  const [isOpen, toggleOpen] = useState(false);

  useEffect(() => {
    if (width && width >= screenSize.bigDesktop) {
      toggleOpen(false);
    }
  }, [width]);

  const toggle = () => {
    toggleOpen(!isOpen);
  };

  return {
    isOpen,
    toggle,
  };
};
