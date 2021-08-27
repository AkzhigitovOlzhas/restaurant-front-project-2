import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Counter } from "../Counter/Counter";
import { OtherIngredients } from "./OtherIngredients";
import { ProductInfo } from "./ProductInfo";
import { Reviews } from "./Reviews";
import { FaShoppingBasket } from "react-icons/fa";
import "./style.css";
import { useState } from "react";

import { useQuery } from "react-query";
import { getProductCard } from "../../api";

export const ProductModal = ({ show, onHide, id }) => {
  const { data, isLoading } = useQuery(["products", { id }], getProductCard);

  const [count, setCount] = useState(1);
  const [newPrice, setNewPrice] = useState(123);
  const [ingredients, setIngredients] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(ingredients);
    console.log(newPrice);
  }

  function handleSetCount(newCount) {
    setCount(newCount);
    setNewPrice(data.price * newCount);
  }

  function handleSetIngredients(event, currentPrice) {
    let newIngredients = ingredients;
    if (event.target.checked) {
      newIngredients.push({ name: event.target.value, currentPrice });
      setNewPrice(newPrice + currentPrice);
    } else {
      newIngredients = newIngredients.filter(
        (obj) => obj.name !== event.target.value
      );
      setNewPrice(newPrice - currentPrice);
    }
    setIngredients(newIngredients);
  }

  if (isLoading) {
    return (
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"> ds</Modal.Title>
        </Modal.Header>
        <Modal.Footer className="justify-content-between">
          <div className="d-flex flex-column align-items-start"></div>
          <div className="d-flex">
            <Counter changeNum={handleSetCount} state={count} />
            <Button type="submit" variant="dark" className="ms-3">
              <FaShoppingBasket />
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    );
  } 
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="scroll-y pt-0">
          <div className="product-modal">
            <Row>
              <Col lg={6} sm={12}>
                <div className="product-img-block">
                  <img
                    src="https://dodopizza-a.akamaihd.net/static/Img/Products/6a089c6e87f2431a99cdfc9fa82bdbf0_292x292.jpeg"
                    alt=""
                    className="product-modal-img"
                  />
                </div>
                <Reviews className="d-none d-lg-block" data={data.comments} />
              </Col>
              <Col>
                <ProductInfo
                  title={data.name}
                  description={data.description}
                  ingredients={data.ingridients}
                  info={data.info}
                />
                <OtherIngredients
                  data={[
                    { id: 1, name: "Соус 1", price: 50 },
                    { id: 2, name: "Соус 2", price: 50 },
                    { id: 3, name: "Соус 3", price: 50 },
                  ]}
                  handleSetIngredients={handleSetIngredients}
                />
                <Reviews
                  className="d-lg-none d-block mt-3"
                  data={data.comments}
                />
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <div className="d-flex flex-column align-items-start">
            {data.old_price ? (
              <div className="d-flex">
                <div className="text-danger fs-4 fw-bold">{newPrice}Р</div>
                <div className="text-secondary text-decoration-line-through align-self-end ms-2">
                  {data.old_price}Р
                </div>
              </div>
            ) : (
              <div className="text-danger fs-4 fw-bold">{newPrice}Р</div>
            )}
          </div>
          <div className="d-flex">
            <Counter changeNum={handleSetCount} state={count} />
            <Button type="submit" variant="dark" className="ms-3">
              <FaShoppingBasket />
            </Button>
          </div>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
