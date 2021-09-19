import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { cartActions } from "../../store/cart/actions";
import { YMaps, withYMaps } from "react-yandex-maps";

function MapSuggestComponent(props) {
  const { ymaps } = props;
  React.useEffect(() => {
    const suggestView = new ymaps.SuggestView("suggest");
    suggestView.events.add("select", (e) => {
      props.setAddress(e.get("item").value);
    }); // eslint-disable-next-line
  }, [ymaps.SuggestView]);
  return (
    <Form.Floating className="mb-3">
      <Form.Control
        type="text"
        placeholder="address"
        onChange={(event) => props.setAddress(event.target.value)}
        id="suggest"
        required
      />
      <label>Адресс доставки</label>
    </Form.Floating>
  );
}

export const OrderForm = ({ onFormSubmit, isLoading }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [addressInput, setAddressInput] = useState("");

  const SuggestComponent = React.useMemo(() => {
    return withYMaps(MapSuggestComponent, true, [
      "SuggestView",
      "geocode",
      "coordSystem.geo",
    ]);
  }, []);

  function init() {
    let userData = JSON.parse(localStorage.getItem("user"));
    let initValues = {
      name: "",
      surname: "",
      home: "",
      appartament: "",
      phone: "",
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
        address: addressInput,
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
    if (!values.home) {
      errors.home = "Введите дом";
    }
    if (!values.appartament) {
      errors.appartament = "Введите квартиру";
    }
    if (!values.phone) {
      errors.phone = "Введите номер телефона";
    } else if (
      /[a-zA-Zа-яА-Я]/gi.test(values.phone) ||
      values.phone.length < 7
    ) {
      errors.phone = "Введите корректный номер!";
    }

    return errors;
  }

  return (
    <Formik
      initialValues={init()}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        let order = createOrder(values);
        console.log(order);
        order.address =
          order.address +
          ` [Дом: ${values.home}, Квартира №${values.appartament}]`;
        delete order.home;
        delete order.appartament;
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
                      <YMaps
                        enterprise
                        query={{
                          apikey: "4e73e034-4374-4e99-891e-799792ce98fc",
                        }}
                      >
                        <SuggestComponent
                          setAddress={(address) => setAddressInput(address)}
                        />
                      </YMaps>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Floating className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="home"
                          name="home"
                          value={values.home}
                          onChange={handleChange}
                        />
                        <label>
                          {errors.home && touched.home ? (
                            <span className="text-danger">{errors.home}</span>
                          ) : (
                            "Дом"
                          )}
                        </label>
                      </Form.Floating>
                    </Col>
                    <Col>
                      <Form.Floating className="mb-3">
                        <Form.Control
                          type="number"
                          placeholder="appartament"
                          name="appartament"
                          value={values.appartament}
                          onChange={handleChange}
                        />
                        <label>
                          {errors.appartament && touched.appartament ? (
                            <span className="text-danger">
                              {errors.appartament}
                            </span>
                          ) : (
                            "Квартира"
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
                  <div className="fs-4 ">Информация о доставке</div>
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
