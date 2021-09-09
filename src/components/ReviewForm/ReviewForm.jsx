import { Formik } from "formik";
import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";

export const ReviewForm = ({ id_product, onFormSubmit, isLoading }) => {
  return (
    <Formik
      initialValues={{ body: "" }}
      
      validate={(values) => {
        const errors = {};

        if (!values.body) {
          errors.body = "Отзыв не может быть пустым";
        } else if (localStorage.getItem("token") === null) {
          errors.body = "Чтобы оставить отзыв войдите.";
        } else if (values.body.length < 15) {
          errors.body = "Отзыв слишком короткий.";
        }
        return errors;
      }}

      onSubmit={(values, { setSubmitting, setFieldValue }) => {
        let user = JSON.parse(localStorage.getItem("user"));
        onFormSubmit({ ...values, user_id: user.id, product_id: id_product });
        setFieldValue("body", "", false);
        setSubmitting(false);
        toast.info(`Ваш отзыв опубликован.`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }}
    >
      {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <Row style={{ maxWidth: "100%", width: "100%" }}>
            <Col lg={12}>
              <Form.Floating>
                <Form.Control
                  type="text"
                  name="body"
                  placeholder="otzyv"
                  value={values.body}
                  onChange={handleChange}
                />
                <label>
                  {errors.body ? (
                    <span className="text-danger">{errors.body}</span>
                  ) : (
                    "Ваш отзыв"
                  )}
                </label>
              </Form.Floating>
            </Col>
            <Col className="mt-1">
              <Button type="submit" disabled={isSubmitting}>
                {isLoading ? (
                  <Loader type="ThreeDots" color="#fff" height={10} />
                ) : (
                  "Отправить"
                )}
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};
