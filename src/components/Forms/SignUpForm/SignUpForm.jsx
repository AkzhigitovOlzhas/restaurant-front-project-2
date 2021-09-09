import React from "react";
import { Formik } from "formik";
import { Alert, Col, Form, Row } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { authModalActions } from "../../../store/authModals/actions";
import { useDispatch } from "react-redux";

export const SignUpForm = ({
  onFormSubmit,
  isLoading,
  isSignUpFail,
  isSignUpOk,
  setIsSignUpOk,
}) => {
  const dispatch = useDispatch();

  function validate(values) {
    const errors = {};
    if (!values.name) {
      errors.name = "Имя";
    }
    if (!values.surname) {
      errors.surname = "Фамилия";
    }
    if (!values.phone) {
      errors.phone = "Введите номер телефона";
    } else if (
      /[a-zA-Zа-яА-Я]/gi.test(values.phone) ||
      values.phone.length < 7
    ) {
      errors.phone = "Введите корректный номер!";
    }
    if (!values.email) {
      errors.email = "Введите эл.почту";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Введите пароль";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i.test(values.password)
    ) {
      errors.password = "Легкий пароль!";
    }
    if (!values.password_confirmation) {
      errors.password_confirmation = "Введите пароль";
    } else if (values.password !== values.password_confirmation) {
      errors.password_confirmation = "Пароли не совпадают!";
    }
    return errors;
  }

  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
      }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        onFormSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ errors, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Floating className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="name"
                />
                <label>
                  {errors.name ? (
                    <span className="text-danger">{errors.name}</span>
                  ) : (
                    "Имя"
                  )}
                </label>
              </Form.Floating>
            </Col>
            <Col>
              <Form.Floating className="mb-3">
                <Form.Control
                  type="text"
                  name="surname"
                  onChange={handleChange}
                  placeholder="surname"
                />
                <label>
                  {errors.surname ? (
                    <span className="text-danger">{errors.surname}</span>
                  ) : (
                    "Фамилия"
                  )}
                </label>
              </Form.Floating>
            </Col>
          </Row>
          <Form.Floating className="mb-3">
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="email"
            />
            <label>
              {errors.email ? (
                <span className="text-danger">{errors.email}</span>
              ) : (
                "Введите эл.почту"
              )}
            </label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              type="text"
              name="phone"
              onChange={handleChange}
              placeholder="phone"
            />
            <label>
              {errors.phone ? (
                <span className="text-danger">{errors.phone}</span>
              ) : (
                "Введите номер телефона"
              )}
            </label>
          </Form.Floating>
          <Row>
            <Col>
              <Form.Label className="d-block d-sm-none fs-7">
                {errors.password ? (
                  <span className="text-danger">{errors.password}</span>
                ) : (
                  "Введите пароль"
                )}
              </Form.Label>
              <Form.Floating>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  className="py-2 pt-sm-4 h-75"
                />
                <label className="d-none d-sm-block">
                  {errors.password ? (
                    <span className="text-danger">{errors.password}</span>
                  ) : (
                    "Введите пароль"
                  )}
                </label>
              </Form.Floating>
            </Col>
            <Col>
              <Form.Label className="d-block d-sm-none fs-7">
                {errors.password_confirmation ? (
                  <span className="text-danger">
                    {errors.password_confirmation}
                  </span>
                ) : (
                  "Повторите пароль"
                )}
              </Form.Label>
              <Form.Floating>
                <Form.Control
                  name="password_confirmation"
                  type="password"
                  onChange={handleChange}
                  placeholder="Password"
                  className="py-2 pt-sm-4 h-75"
                />
                <label className="d-none d-sm-block">
                  {errors.password_confirmation ? (
                    <span className="text-danger">
                      {errors.password_confirmation}
                    </span>
                  ) : (
                    "Повторите пароль"
                  )}
                </label>
              </Form.Floating>
            </Col>
          </Row>
          {isSignUpFail && (
            <Alert variant="danger" className="mt-2 mb-0">
              Данная эл.почта уже зарегистрирована на другого пользователя
            </Alert>
          )}
          {isSignUpOk && (
            <Alert variant="success" className="mt-2 mb-0">
              Успешная регистрация,
              <span
                style={{ cursor: "pointer" }}
                className="fw-bold"
                onClick={() => {
                  dispatch(authModalActions.setShowSignUpModal(false));
                  dispatch(authModalActions.setShowSignInModal(true));
                  setIsSignUpOk(false);
                }}
              >
                войти.
              </span> 
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
              "Зарегистрироваться"
            )}
          </button>
        </form>
      )}
    </Formik>
  );
};
