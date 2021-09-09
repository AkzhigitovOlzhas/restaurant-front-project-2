import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Counter } from "../Counter";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart/actions";
import { toast } from "react-toastify";

export const OrderItem = ({ order }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(order.count);

  function handleRemoveProduct() {
    let products = JSON.parse(localStorage.getItem("cart"));
    let count = localStorage.getItem("cartCount");

    products = products.filter(
      (item) => JSON.stringify(item) !== JSON.stringify(order)
    );

    count = +count - +order.count;
    dispatch(cartActions.setCart(products));
    dispatch(cartActions.setCountCart(count));
    localStorage.setItem("cartCount", count);
    localStorage.setItem("cart", JSON.stringify(products));

    toast.success(`Товар успешно удален! (${order.count}шт.)`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function hadndleSetCount(counterCount) {
    let products = JSON.parse(localStorage.getItem("cart"));
    let cartCount = +localStorage.getItem("cartCount");

    for (let i = 0; i < products.length; i++) {
      if (JSON.stringify(products[i]) === JSON.stringify(order)) {
        products[i].count = counterCount;
        products[i].total_price = +products[i].data.price * +counterCount;
      }
    }

    cartCount += +counterCount - +count;
    setCount(counterCount);
    dispatch(cartActions.setCart(products));
    dispatch(cartActions.setCountCart(cartCount));
    localStorage.setItem("cartCount", cartCount);
    localStorage.setItem("cart", JSON.stringify(products));

    toast.success(`Количество товара успешно изменено на ${counterCount}.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <Col xs={12} className="p-2 px-4">
      <div className="card p-2">
        <div
          style={{
            position: "absolute",
            right: "10px",
            cursor: "pointer",
          }}
          onClick={handleRemoveProduct}
        >
          <AiOutlineClose color="red" size="20px" />
        </div>

        <div>
          <div className="d-flex flex-row h-100 align-items-center">
            <img
              src={`http://willdimr.beget.tech/restaurant1/storage/app/${order.data.image}`}
              alt=""
              style={{ height: "130px", maxWidth: "130px" }}
            />
            <div className="ms-3 d-flex flex-column h-100 justify-content-between">
              <div className="fs-4 text-warning fw-bold">{order.data.name}</div>
              <Counter
                count={count}
                setCount={hadndleSetCount}
                setPrice={() => {}}
              />
              <div className="text-secondary">Цена: {order.data.price}руб</div>
            </div>
          </div>
          {order.cross_sells.length !== 0 && (
            <div className="mt-1">
              <div className="fs-5 fw-bold text-danger">
                Дополнительно к товару:
              </div>
              <div className="ps-2 text-secondary">
                {order.cross_sells.map((item, index) => (
                  <div key={index}>
                    {item.name} x {item.currentPrice}руб
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};
