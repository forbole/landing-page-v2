import { useState, useEffect } from "react";
import validator from "validator";
import axios from "axios";
import DOMPurify from "isomorphic-dompurify";

const useContactForm = () => {
  const [inputs, setInputs] = useState({ name: "", message: "", email: "" });
  const [canSubmit, setCanSubmit] = useState(false);
  const sanitize = DOMPurify.sanitize;

  useEffect(() => {
    if (
      validator.isEmail(inputs.email) &&
      inputs.name.length &&
      inputs.message.length
    ) {
      setCanSubmit(true);
    } else if (canSubmit) {
      setCanSubmit(false);
    }
  }, [inputs.message, inputs.name, inputs.email]);

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
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
    console.log(event.target.value);
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    canSubmit,
  };
};

export default useContactForm;
