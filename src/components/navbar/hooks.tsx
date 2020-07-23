import { useState } from "react";

export const useShowAvailableLanguages = () => {
  const [showLanguage, setShowLanguage] = useState(false);

  const turnOffShowLanguage = () => {
    setShowLanguage(false);
  };

  const turnOnShowLanauge = () => {
    setShowLanguage(true);
  };

  const toggleShowLanguage = () => {
    setShowLanguage(!showLanguage);
  };

  return {
    showLanguage,
    toggleShowLanguage,
  };
};
