import React from "react";
import { Accordion } from "react-bootstrap";

export const OrderCard = ({ order }) => {
  let date = new Date(order.created_at).toLocaleString();

  return (
    <>
      <Accordion.Item eventKey={order.id} className="mb-3">
        <Accordion.Header>
          <div className="d-flex align-items-end fs-5 fw-bold justify-content-between w-100 me-2">
            Заказ
            <div className="text-secondary fs-6">{date}</div>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="p-1">
            {order.orderProd.map((product) => {
              return (
                <div
                  className="card p-2 mb-2 d-flex flex-row align-items-end justify-content-between"
                  key={product.id}
                >
                  <div>
                    <div className="text-warning fw-bold fs-5">
                      {product.name} - {product.price}руб. {product.quanity}шт.
                      = {product.price * product.quanity}руб.
                    </div>
                    <div>
                      {product.crossSells.length === 0 ? null : (
                        <>
                          <div className="text-primary fw-bold">
                            Дополнительно к товарару:
                          </div>
                          {product.crossSells.map((cross_sell) => {
                            return (
                              <div
                                className="text-secondary fw-bold"
                                key={cross_sell.id}
                              >
                                {cross_sell.name} - {cross_sell.price}руб.
                              </div>
                            );
                          })}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="fs-6 text-secondary">
                    Итог по набору: {product.total}руб.
                  </div>
                </div>
              );
            })}
          </div>
          <div className="fs-4 fw-bold text-danger text-end me-1">
            Итого: {order.total}руб
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};
