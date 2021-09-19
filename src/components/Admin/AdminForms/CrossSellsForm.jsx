import React from "react";
import { Formik } from "formik";
import { Button, Col, Form, Row } from "react-bootstrap";
import Loader from "react-loader-spinner";

export const CrossSellsForm = ({ onFormSubmit, isLoading }) => {
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
        onSubmit={(values, { setSubmitting, resetForm }) => {
          onFormSubmit(values);
          setSubmitting(false);
          resetForm({
            name: "",
            price: "",
          });
        }}
      >
        {({ errors, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="p-2 bg-white">
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
          </Form>
        )}
      </Formik>
    </>
  );
};
