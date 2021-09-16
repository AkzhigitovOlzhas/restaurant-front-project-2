import React from "react";
import { Button } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { removeClosedOrder } from "../../../api";
import { OrderCard } from "./OrderCard";

export const ClosedOrderCard = ({ order }) => {
  const { mutateAsync, isLoading } = useMutation(removeClosedOrder);
  const queryClient = useQueryClient();

  const remove = async () => {
    await mutateAsync(order.id);
    queryClient.invalidateQueries("closedOrders");
    toast.info("Заказ успешно удален", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
        <Button variant="danger" onClick={remove}>
          {isLoading ? (
            <Loader type="ThreeDots" color="#fff" height={10} />
          ) : (
            "Удалить заказ"
          )}
        </Button>
      </div>
    </div>
  );
};
