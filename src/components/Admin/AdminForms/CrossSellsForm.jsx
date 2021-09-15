import React from "react";
import { Formik } from "formik";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import Loader from "react-loader-spinner";

export const CrossSellsForm = ({ onFormSubmit, isNotError, isLoading }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          price: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Введите название";
          }
          if (!values.price) {
            errors.price = "Введите цену";
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
            <div className="fs-3 mb-2">Добавить доп. продажи</div>
            <Row>
              <Col>
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
              </Col>
              <Col>
                <Form.Floating>
                  <Form.Control
                    name="price"
                    type="number"
                    onChange={handleChange}
                    placeholder=""
                  />
                  <label>
                    {errors.price ? (
                      <span className="text-danger">{errors.price}</span>
                    ) : (
                      "Введите цену"
                    )}
                  </label>
                </Form.Floating>
              </Col>
            </Row>
            <Button type="submit" disabled={isLoading} className="mt-2">
              {isLoading ? (
                <Loader type="ThreeDots" color="#fff" height={10} />
              ) : (
                "Отправить"
              )}
            </Button>
            {isNotError ? (
              <Alert variant="success" className="mt-2 mb-0">
                Продукт успешно добавлен
              </Alert>
            ) : null}
          </Form>
        )}
      </Formik>
    </>
  );
};
