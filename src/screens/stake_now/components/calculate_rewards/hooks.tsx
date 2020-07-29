import { useState } from "react";

export const useCalculateRewardsHook = () => {
  const [selectedToken, setSelectedToken] = useState<string | null>(null);
  return {
    selectedToken,
    setSelectedToken,
  };
};
