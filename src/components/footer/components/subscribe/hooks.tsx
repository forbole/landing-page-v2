import { useState } from "react";
import validator from "validator";
import { toast } from "react-toastify";

export const useSubscribeHook = (t: any) => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e?.target?.value ?? "");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, "damn email");
    if (!validator.isEmail(email)) {
      toast.error(t("common:invalidEmail"));
    }
    toast.success(t("subscribed"));
    setEmail("");
  };

  return {
    email,
    handleChange,
    handleSubmit,
  };
};
