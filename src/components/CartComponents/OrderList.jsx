import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer, Zoom } from "react-toastify";
import { cartActions } from "../../store/cart/actions";
import { OrderItem } from "./OrderItem";

export const OrderList = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      dispatch(cartActions.setCart(JSON.parse(localStorage.getItem("cart"))));
    }
  }, [dispatch]);

  function handleClearCart() {
    localStorage.removeItem("cart");
    localStorage.removeItem("cartCount");
    dispatch(cartActions.setCart([]));
    dispatch(cartActions.setCountCart(0));
    toast.error(`Корзина очищена.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function getTotal() {
    let total = cart.reduce((acc, item) => {
      return +acc + +item.total_price;
    }, 0);
    localStorage.setItem("total", total);
    return total;
  }

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom}
      />
      <div className="display-3">Корзина</div>
      <div className="bg-white mt-3">
        <Row>
          {cart.length !== 0 ? (
            <>
              {cart.map((order) => (
                <OrderItem key={JSON.stringify(order)} order={order} />
              ))}
              <div className="p-4 d-flex justify-content-between  flex-column flex-sm-row align-items-sm-center">
                <div className="fs-4 text-danger">Итого: {getTotal()} руб.</div>
                <div className="mt-3 mt-sm-0">
                  <Button variant="success" className="ms-2" href="/order">
                    Оформить заказ
                  </Button>
                  <Button
                    variant="danger"
                    className="ms-2"
                    onClick={handleClearCart}
                  >
                    Очистить корзину
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="fs-5 p-3">Корзина пуста :(</div>
          )}
        </Row>
      </div>
    </Container>
  );
};
