import { Formik } from "formik";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { cartActions } from "../../store/cart/actions";

export const OrderForm = ({ onFormSubmit, isLoading }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  function init() {
    let userData = JSON.parse(localStorage.getItem("user"));
    let initValues = {
      name: "",
      surname: "",
      phone: "",
      address: "",
      comment: "",
    };

    if (userData) {
      initValues = {
        ...initValues,
        name: userData.name,
        surname: userData.surname,
        phone: userData.phone,
      };
    }
    return initValues;
  }

  function createOrder(userData) {
    if (!localStorage.getItem("cart")) {
      return { error: "Корзина пуста!" };
    } else {
      let order = {
        ...userData,
        total: localStorage.getItem("total"),
      };

      if (localStorage.getItem("user")) {
        order.user_id = JSON.parse(localStorage.getItem("user")).id;
      }

      let products = JSON.parse(localStorage.getItem("cart"));
      products = products.map((product) => {
        let orderCross = product.cross_sells.map((cross_sell) => {
          return {
            cross_sell_id: cross_sell.id,
            price: cross_sell.currentPrice,
          };
        });
        return {
          product_id: product.data.id,
          total: product.total_price,
          quanity: product.count,
          orderCross,
        };
      });
      order.orderList = products;
      return order;
    }
  }

  function validate(values) {
    const errors = {};
    if (!values.name) {
      errors.name = "Введите имя";
    }
    if (!values.surname) {
      errors.surname = "Введите фамилию";
    }
    if (!values.phone) {
      errors.phone = "Введите номер телефона";
    } else if (
      /[a-zA-Zа-яА-Я]/gi.test(values.phone) ||
      values.phone.length < 7
    ) {
      errors.phone = "Введите корректный номер!";
    }

    if (!values.address) {
      errors.address = "Введите адрес";
    }

    return errors;
  }

  return (
    <Formik
      initialValues={init()}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        let order = createOrder(values);

        onFormSubmit(order);
        dispatch(cartActions.setCart([]));
        dispatch(cartActions.setCountCart(0));
        localStorage.removeItem("cart");
        localStorage.removeItem("total");
        localStorage.removeItem("cartCount");
        history.push("/");
        setSubmitting(false);
      }}
    >
      {({
        errors,
        values,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <Container>
          <form onSubmit={handleSubmit}>
            <div className="display-6 my-2">Оформление заказа</div>
            <div className="bg-white p-3 pt-1">
              <Row>
                <Col md={6} xs={12} className="mt-2">
                  <Row>
                    <Col>
                      <Form.Floating className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="name"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                        />
                        <label>
                          {errors.name && touched.name ? (
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
                          placeholder="surname"
                          name="surname"
                          value={values.surname}
                          onChange={handleChange}
                        />
                        <label>
                          {errors.surname && touched.surname ? (
                            <span className="text-danger">
                              {errors.surname}
                            </span>
                          ) : (
                            "Фамилия"
                          )}
                        </label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Floating className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="phone"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                        />
                        <label>
                          {errors.phone && touched.phone ? (
                            <span className="text-danger">{errors.phone}</span>
                          ) : (
                            "Номер телефона"
                          )}
                        </label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Floating className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="address"
                          name="address"
                          onChange={handleChange}
                        />
                        <label>
                          {errors.address && touched.address ? (
                            <span className="text-danger">
                              {errors.address}
                            </span>
                          ) : (
                            "Адресс доставки"
                          )}
                        </label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Floating className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="comment"
                          name="comment"
                          onChange={handleChange}
                        />
                        <Form.Text className="text-muted">
                          *Не обязательное поле
                        </Form.Text>
                        <label>Коментарии к заказу</label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button
                        type="submit"
                        variant="success"
                        className="w-100 mb-2"
                        disabled={isSubmitting}
                      >
                        {isLoading ? (
                          <Loader type="ThreeDots" color="#fff" height={10} />
                        ) : (
                          "Оформить заказ"
                        )}
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <div className="fs-4 ">Lorem ipsum dolor sit amet.</div>
                  <div className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi totam ipsum iste sunt! Reiciendis obcaecati
                    consequuntur optio quia inventore alias dolor
                    necessitatibus, aut exercitationem ipsum voluptatum
                    temporibus incidunt possimus ipsam.
                  </div>
                </Col>
              </Row>
            </div>
          </form>
        </Container>
      )}
    </Formik>
  );
};
