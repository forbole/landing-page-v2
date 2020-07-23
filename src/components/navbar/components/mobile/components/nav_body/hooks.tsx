import { useState } from "react";
import { useTransition } from "react-spring";

export const useShowAvailableLanguages = () => {
  const [showLanguage, setShowLanguage] = useState(false);

  const toggleShowLanguage = () => {
    setShowLanguage(!showLanguage);
  };

  return {
    showLanguage,
    toggleShowLanguage,
  };
};

export const useTransitionAnimation = ({ showLanguage, isOpen }) => {
  const languageTransitions: any = useTransition(showLanguage, null, {
    enter: () => async (next: any) => {
      await next({ display: "block" });
      await next({ opacity: "1" });
      await next({ maxHeight: "500px" });
    },
    leave: () => async (next: any) => {
      await next({ maxHeight: "0" });
      await next({ opacity: "0" });
      await next({ display: "none" });
    },
    from: {
      opacity: "0",
    },
  });

  const displayTransitions: any = useTransition(isOpen, null, {
    enter: () => async (next) => {
      await next({ display: "block" });
      await next({ opacity: "1" });
    },
    leave: () => async (next) => {
      await next({ opacity: "0" });
      await next({ display: "none" });
    },
    from: {
      display: "none",
      opacity: "0",
    },
    option: { mass: 1, tension: 500, friction: 18 },
  });

  return {
    languageTransitions,
    displayTransitions,
  };
};
