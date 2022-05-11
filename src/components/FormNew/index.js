
import "./helper.css";


import React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

export const Appform = () => (

  <div className="myapp">

    <h1 className="title_text">
      Buy your first crypto — it’s easy
    </h1>
    <span className="info_text">Verified by 10M+ purchases per month</span>
    <Formik
      initialValues={{ email: "" }}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;

        return (
          <form onSubmit={handleSubmit}>
            <div className="form_content">
              <label htmlFor="email" style={{ display: "block" }}>
              </label>
              <input
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}

              <button type="submit" disabled={isSubmitting}>
                Sign Up
              </button>
            </div>
          </form>
        );
      }}
    </Formik>
  </div>
);


