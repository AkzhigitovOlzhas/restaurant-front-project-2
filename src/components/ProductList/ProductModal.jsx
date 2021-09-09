import React, { useEffect } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Counter } from "../Counter";
import { OtherIngredients } from "./OtherIngredients";
import { ProductInfo } from "./ProductInfo";
import { Reviews } from "./Reviews";
import { FaShoppingBasket } from "react-icons/fa";
import "./style.css";
import { useState } from "react";

import { useQuery } from "react-query";
import { getProductCard } from "../../api";
import Loader from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart/actions";
import { toast } from "react-toastify";

export const ProductModal = ({ show, onHide, id }) => {
  const { data, isLoading } = useQuery(["products", { id }], getProductCard);
  const [count, setCount] = useState(1);
  const [newPrice, setNewPrice] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const dispatch = useDispatch();

  function handleSetPrice(isAdd) {
    if (isAdd) {
      setNewPrice(newPrice + data.price);
    } else {
      setNewPrice(newPrice - data.price);
    }
  }

  function handleOnHide() {
    onHide();
    setIngredients([]);
    setNewPrice(data.price);
    setCount(1);
  }

  useEffect(() => {
    if (isLoading === false && data) {
      setNewPrice(data.price);
    }
  }, [isLoading, data]);

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

  function compareArrObj(arr1, arr2) {
    let flag = true;

    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i].name !== arr2[i].name) {
          flag = false;
          break;
        }
      }
      if (!flag) {
        break;
      }
    }

    return flag;
  }

  function handleAddCart() {
    toast.success("🗑️ Товар успешно добавлен в корзину!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    let product = {
      data,
      count,
      total_price: newPrice,
      cross_sells: ingredients,
    };

    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([product]));
      localStorage.setItem("cartCount", product.count);
      dispatch(cartActions.setCountCart(product.count));
    } else {
      let cart = JSON.parse(localStorage.getItem("cart"));
      let cartCount = +localStorage.getItem("cartCount");
      let isInCart = true;
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].data.id === data.id) {
          if (cart[i].cross_sells.length === ingredients.length) {
            if (compareArrObj(cart[i].cross_sells, ingredients)) {
              cart[i].count = cart[i].count + count;
              cartCount += count;
              isInCart = false;
              break;
            }
          }
        }
      }

      if (isInCart) {
        cart.push(product);
        cartCount += product.count;
      }
      dispatch(cartActions.setCountCart(cartCount));
      localStorage.setItem("cartCount", cartCount);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

  if (isLoading) {
    return (
      <Modal
        show={show}
        onHide={handleOnHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Loading...
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Loader />
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <div className="d-flex flex-column align-items-start"></div>
          <div className="d-flex">
            <Counter setPrice={handleSetPrice} />
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
      onHide={handleOnHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {data.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="scroll-y pt-0">
        <div className="product-modal">
          <Row>
            <Col lg={6} sm={12}>
              <div
                className="product-img-block"
                style={{ marginTop: "5px", marginBottom: "10px" }}
              >
                <img
                  src={`http://willdimr.beget.tech/restaurant1/storage/app/${data.image}`}
                  alt=""
                  className="product-modal-img"
                />
              </div>
              <Reviews
                className="d-none d-lg-block"
                data={data.comments}
                id_product={id}
              />
            </Col>
            <Col>
              <ProductInfo
                title={data.name}
                description={data.description}
                ingredients={data.ingridients}
                info={data.info}
              />
              <OtherIngredients
                defaultValues={ingredients}
                handleSetIngredients={handleSetIngredients}
              />
              <Reviews
                className="d-lg-none d-block mt-3"
                data={data.comments}
                id_product={id}
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
          <Counter
            setPrice={handleSetPrice}
            count={count}
            setCount={setCount}
          />
          <Button variant="dark" className="ms-3" onClick={handleAddCart}>
            <FaShoppingBasket />
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
