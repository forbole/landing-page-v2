import { useState } from "react";

export const useHomeHook = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  const handleActiveScreen = () => {
    if (activeScreen === 0) {
      setActiveScreen(1);
    } else {
      setActiveScreen(0);
    }
  };

  return {
    activeScreen,
    setActiveScreen,
    handleActiveScreen,
  };
};
