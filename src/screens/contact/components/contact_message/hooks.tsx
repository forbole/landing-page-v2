import { useState, useEffect } from "react";
import validator from "validator";

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
