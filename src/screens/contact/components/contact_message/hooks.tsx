import { useState, useEffect } from "react";
import { useTranslation } from "i18n";
import validator from "validator";
import axios from "axios";
import DOMPurify from "isomorphic-dompurify";
import { toast } from "react-toastify";

const useContactForm = () => {
  const [inputs, setInputs] = useState({ name: "", message: "", email: "" });
  const [canSubmit, setCanSubmit] = useState(false);
  const sanitize = DOMPurify.sanitize;
  const { t } = useTranslation("contact");

  useEffect(() => {
    if (validator.isEmail(inputs.email) && inputs.name && inputs.message) {
      setCanSubmit(true);
    } else if (canSubmit) {
      setCanSubmit(false);
    }
  }, [inputs]);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      axios
        .post("/api/contact", {
          from: inputs.email,
          to: "info@forbole.com",
          subject: "Inquiry From Forbole's Landing Page",
          text: sanitize(inputs.message),
          html: `<p>${sanitize(inputs.message)}</p>`,
        })
        .then((res) => {
          if (res.status == 200) {
            toast.success(t("success"));
            setInputs({
              name: "",
              message: "",
              email: "",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(t("error"));
        });
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    canSubmit,
  };
};

export default useContactForm;
