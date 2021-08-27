import React from "react";
import { Formik } from "formik";
import { Alert, Form } from "react-bootstrap";
import Loader from "react-loader-spinner";

export const SignInForm = ({ onFormSubmit, isLoading, isAuthFail }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Введите эл.почту";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        onFormSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ errors, handleChange, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Floating className="mb-3">
            <Form.Control
              name="email"
              type="email"
              onChange={handleChange}
              placeholder="name@example.com"
            />
            <label>
              {errors.email ? (
                <span className="text-danger">{errors.email}</span>
              ) : (
                "Введите эл.почту"
              )}
            </label>
          </Form.Floating>
          <Form.Floating>
            <Form.Control
              name="password"
              type="password"
              onChange={handleChange}
              placeholder="Password"
            />
            <label>Введите пароль</label>
          </Form.Floating>
          {isAuthFail && (
            <Alert variant="danger" className="mt-2 mb-0">
              Неверный пароль или логин,
              <span className="fw-bold">попробуйте еще раз!</span>
            </Alert>
          )}
          <button
            className="btn-dark text-center mt-2 p-2"
            style={{ cursor: "pointer", width: "100%" }}
            disabled={isSubmitting}
          >
            {isLoading ? (
              <Loader type="ThreeDots" color="#fff" height={10} />
            ) : (
              "Войти"
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};
