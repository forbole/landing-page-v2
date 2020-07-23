import { useState } from "react";

export const useMobileNavHook = () => {
  const [isOpen, toggleOpen] = useState(false);

  const toggle = () => {
    toggleOpen(!isOpen);
  };

  return {
    isOpen,
    toggle,
  };
};
