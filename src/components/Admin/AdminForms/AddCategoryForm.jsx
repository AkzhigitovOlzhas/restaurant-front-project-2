import { Formik } from "formik";
import React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import Loader from "react-loader-spinner";

export const AddCategoryForm = ({ onFormSubmit, isNotError, isLoading }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Введите название категории";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          onFormSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ errors, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="p-2 bg-white my-4">
            <div className="fs-3 mb-2">Добавить категорию</div>
            <Form.Floating>
              <Form.Control
                name="name"
                type="text"
                onChange={handleChange}
                placeholder=""
              />
              <label>
                {errors.name ? (
                  <span className="text-danger">{errors.name}</span>
                ) : (
                  "Введите название"
                )}
              </label>
            </Form.Floating>
            <Button type="submit" disabled={isLoading} className="mt-2">
              {isLoading ? (
                <Loader type="ThreeDots" color="#fff" height={10} />
              ) : (
                "Отправить"
              )}
            </Button>
            {isNotError ? (
              <Alert variant="success" className="mt-2 mb-0">
                Категория успешно добавлена
              </Alert>
            ) : null}
          </Form>
        )}
      </Formik>
    </>
  );
};
