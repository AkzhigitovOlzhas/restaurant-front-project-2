import React, { useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { getAllCategoriesAdmin } from "../../../api";
import { Formik } from "formik";
import Loader from "react-loader-spinner";
import { useRef } from "react";

export const AddProductForm = ({ onFormSubmit, isLoadingSubmit, initVal }) => {
  const { data, isLoading } = useQuery(
    "categoriesAdmin",
    getAllCategoriesAdmin
  );
  const [file, setFile] = useState(null);
  const inputRef = useRef();

  function init() {
    let values = {
      name: "",
      description: "",
      category_id: 0,
      image: "void",
      price: "",
      old_price: "",
      ingridients: "",
      having: null,
      weight: "",
      is_hit: 0,
      info: "",
    };

    if (data.length !== 0) {
      values = { ...values, category_id: data[0].id };
    }

    if (initVal) {
      values = { ...initVal, category_id: initVal.category.id };
      delete values.category;
    }

    return values;
  }

  function validate(values) {
    const errors = {};
    if (!values.name) {
      errors.name = "Введите название";
    }
    if (!values.description) {
      errors.description = "Введите описание товара";
    }
    if (!values.info) {
      errors.info = "Введите краткую информацию о товаре";
    }
    if (!values.price) {
      errors.price = "Введите цену товара";
    }
    if (!values.old_price) {
      errors.old_price = "Введите старую цену";
    }
    if (!values.ingridients) {
      errors.ingridients = "Введите список ингридиентов";
    }
    if (!values.weight) {
      errors.weight = "Введите вес";
    }

    return errors;
  }

  if (isLoading) {
    return null;
  }

  if (data.length === 0) {
    return (
      <div className="bg-white p-3 fs-5">
        Чтобы создать товар, создайте категорию.
      </div>
    );
  }

  return (
    <Formik
      initialValues={init()}
      validate={validate}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        let formData = new FormData();
        let entries = Object.entries(values).filter(
          (entry) => entry[0] !== "image"
        );

        entries.forEach((entry) => {
          formData.append(entry[0], entry[1]);
        });

        formData.append("image", file);
        onFormSubmit(formData);
        resetForm(init());
        setSubmitting(false);
      }}
    >
      {({
        errors,
        touched,
        values,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit} className="p-2 bg-white">
          <Row>
            <Col sm={6} xs={12} className="mb-3">
              <Form.Floating>
                <Form.Control
                  name="name"
                  type="text"
                  onChange={handleChange}
                  placeholder="name"
                  value={values.name}
                />
                <label>
                  {errors.name && touched.name ? (
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
                <Form.Select
                  name="category_id"
                  onChange={handleChange}
                  value={values.category_id}
                >
                  {data.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Form.Floating className="mb-3">
            <Form.Control
              name="description"
              type="text"
              onChange={handleChange}
              placeholder="description"
              value={values.description}
            />
            <label>
              {errors.description && touched.description ? (
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
              placeholder="info"
              value={values.info}
            />
            <label>
              {errors.info && touched.info ? (
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
                  required={values.image === "void"}
                  type="file"
                  name="image"
                  accept=".png, .jpg"
                  ref={inputRef}
                  onChange={() => setFile(inputRef.current.files[0])}
                />
              </Form.Group>
            </Col>
            <Col sm={5} xs={12} className="mb-3">
              <div>
                <Form.Check
                  defaultChecked={values.is_hit === 0}
                  type="radio"
                  name="is_hit"
                  value={0}
                  onChange={handleChange}
                  label="Не добавлять в популярное"
                />
                <Form.Check
                  defaultChecked={values.is_hit === 1}
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
                  placeholder="price"
                  value={values.price}
                />
                <label>
                  {errors.price && touched.price ? (
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
                  placeholder="old_price"
                  value={values.old_price}
                />
                <label>
                  {errors.old_price && touched.old_price ? (
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
                  placeholder="ingridients"
                  value={values.ingridients}
                />
                <label>
                  {errors.ingridients && touched.ingridients ? (
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
                  placeholder="weight"
                  value={values.weight}
                />
                <label>
                  {errors.weight && touched.weight ? (
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
        </Form>
      )}
    </Formik>
  );
};
