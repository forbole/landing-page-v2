import { useState, useEffect } from "react";
import validator from "validator";
import axios from "axios";
import DOMPurify from "isomorphic-dompurify";
import { toast } from "react-toastify";

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
          toast.success("Success!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
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
