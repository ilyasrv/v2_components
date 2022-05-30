import React, { useState, useEffect } from "react";

import "./style.css";

const MyForm = () => {
  const intialValues = { email: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  return (
    <div className="container">
      <div className="main_text">
        <h1 className="title_text">Buy your first crypto — it’s easy</h1>
        <span className="info_text">Verified by 10M+ purchases per month</span>
      </div>

      <form className="mainform" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            className={formErrors.email && "input-error"}
          />
          {Object.keys(formErrors).length === 0 && isSubmitting && (
            <span className="success-msg">Form submitted successfully</span>
          )}
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>

        <button type="submit">Sign Up</button>

      </form>
    </div>
  );
};

export default MyForm;
