import React from "react";
import { Button } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { useMutation, useQueryClient } from "react-query";
import { closeOrder } from "../../../api";
import { OrderCard } from "./OrderCard";

export const ActiveOrderCard = ({ order }) => {
  const { mutateAsync, isLoading } = useMutation(closeOrder);
  const queryClient = useQueryClient();
  const close = async () => {
    await mutateAsync({ id: order.id });
    queryClient.invalidateQueries("activeOrders");
  };

  return (
    <div className="card bg-white mb-2 p-2">
      <OrderCard order={order} />
      <div className="d-flex align-items-end justify-content-between">
        <div>
          <div className="text-primary fw-bold">Контактная информация</div>
          <div>Имя: {order.name}</div>
          <div>Фамилия: {order.surname}</div>
          <div>
            Тел.: <a href={"tel:" + order.phone}>{order.phone}</a>
          </div>
          <div>Адрес: {order.address}</div>
        </div>
        <Button variant="primary" onClick={close}>
          {isLoading ? (
            <Loader type="ThreeDots" color="#fff" height={10} />
          ) : (
            "Закрыть заказ"
          )}
        </Button>
      </div>
    </div>
  );
};
