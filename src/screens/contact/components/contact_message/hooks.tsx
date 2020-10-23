import { useState, useEffect } from "react";
import validator from "validator";
import nodemailer from "nodemailer";
import transporter from "server/index";
import axios from "axios";

const useContactForm = () => {
  const [inputs, setInputs] = useState({ name: "", message: "", email: "" });
  const [canSubmit, setCanSubmit] = useState(false);

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
        .post("/contact", {
          from: inputs.email,
          to: "hi@forbole.com",
          subject: "Hi Forbole!",
          text: inputs.message,
          html: `<p>${inputs.message}</p>`,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
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
