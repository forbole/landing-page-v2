import { useEffect } from "react";
import { toast } from "react-toastify";

export const useBlogHook = (error, t) => {
  useEffect(() => {
    if (error) {
      toast.error(t("error"));
    }
  }, [error]);
};
