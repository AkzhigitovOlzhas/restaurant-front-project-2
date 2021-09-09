import React from "react";
import { Alert, Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { getAllCategories } from "../../../api";
import { Formik } from "formik";
import Loader from "react-loader-spinner";

export const AddProductForm = ({
  onFormSubmit,
  isNotError,
  isLoadingSubmit,
  defaultValues,
}) => {
  const { data, isLoading } = useQuery("categories", getAllCategories);
  function validate(values) {
    const errors = {};
    if (!values.name) {
      errors.name = "Введите название";
    }
    if (!values.name) {
      errors.name = "Введите название";
    }
    if (!values.name) {
      errors.name = "Введите название";
    }
    return errors;
  }

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        category_id: 1,
        image: "",
        price: "",
        old_price: "",
        ingridients: "",
        having: 20,
        weight: "",
        is_hit: 0,
        info: "",
      }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        onFormSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ errors, handleChange, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit} className="p-2">
          <Row>
            <Col sm={6} xs={12} className="mb-3">
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
            <Col className="mb-3">
              <FloatingLabel
                controlId="floatingSelect"
                label="Выберете категорию"
              >
                <Form.Select name="category_id" onChange={handleChange}>
                  {!isLoading
                    ? data.filter((item) => item.id !== 0)
                        .map((item) => {
                          return (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })
                    : null}
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Form.Floating className="mb-3">
            <Form.Control
              name="description"
              type="text"
              onChange={handleChange}
              placeholder=""
            />
            <label>
              {errors.description ? (
                <span className="text-danger">{errors.description}</span>
              ) : (
                "Краткое описание товара"
              )}
            </label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              name="info"
              type="text"
              onChange={handleChange}
              placeholder=""
            />
            <label>
              {errors.info ? (
                <span className="text-danger">{errors.info}</span>
              ) : (
                "Информация о товаре"
              )}
            </label>
          </Form.Floating>
          <Row className="align-items-center">
            <Col className="mb-3">
              <Form.Group controlId="formFile">
                <Form.Label>Загрузите изображение товара</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  accept=".png, .jpg"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col sm={5} xs={12} className="mb-3">
              <div>
                <Form.Check
                  defaultChecked
                  type="radio"
                  name="is_hit"
                  value={0}
                  onChange={handleChange}
                  label="Не добавлять в популярное"
                />
                <Form.Check
                  type="radio"
                  name="is_hit"
                  value={1}
                  onChange={handleChange}
                  label="Добавить в популярное"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={6} xs={12} className="mb-3">
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
                    "Введите цену товара"
                  )}
                </label>
              </Form.Floating>
            </Col>
            <Col className="mb-3">
              <Form.Floating>
                <Form.Control
                  name="old_price"
                  type="number"
                  onChange={handleChange}
                  placeholder=""
                />
                <label>
                  {errors.old_price ? (
                    <span className="text-danger">{errors.old_price}</span>
                  ) : (
                    "Старая цена (не обязательно)"
                  )}
                </label>
              </Form.Floating>
            </Col>
          </Row>
          <Row>
            <Col sm={6} xs={12} className="mb-3">
              <Form.Floating>
                <Form.Control
                  name="ingridients"
                  type="text"
                  onChange={handleChange}
                  placeholder=""
                />
                <label>
                  {errors.ingridients ? (
                    <span className="text-danger">{errors.ingridients}</span>
                  ) : (
                    "Ведите список ингридиентов"
                  )}
                </label>
              </Form.Floating>
            </Col>
            <Col className="mb-3">
              <Form.Floating>
                <Form.Control
                  name="weight"
                  type="text"
                  onChange={handleChange}
                  placeholder=""
                />
                <label>
                  {errors.weight ? (
                    <span className="text-danger">{errors.weight}</span>
                  ) : (
                    "Ведите вес или кол-во (100гр/12шт)"
                  )}
                </label>
              </Form.Floating>
            </Col>
          </Row>
          <Button type="submit" disabled={isSubmitting}>
            {isLoadingSubmit ? (
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
  );
};
