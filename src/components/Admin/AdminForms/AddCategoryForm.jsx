import { Formik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { useQueryClient } from "react-query";

export const AddCategoryForm = ({ onFormSubmit, isLoading, initVal }) => {
  const queryClient = useQueryClient();
  function init() {
    if (initVal) {
      return { name: initVal };
    }
    return {
      name: "",
    };
  }

  return (
    <>
      <Formik
        initialValues={init()}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Введите название категории";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          queryClient.invalidateQueries("categoriesAdmin");
          onFormSubmit(values);
          setSubmitting(false);
          resetForm(init());
        }}
      >
        {({ errors, values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="p-2 bg-white">
            <Form.Floating>
              <Form.Control
                name="name"
                type="text"
                onChange={handleChange}
                placeholder=""
                value={values.name}
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
          </Form>
        )}
      </Formik>
    </>
  );
};
