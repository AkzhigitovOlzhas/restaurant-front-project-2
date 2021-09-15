import React from "react";
import { ClosedOrderList } from "../Lists";

export const ClosedOrdersEditor = () => {
  return (
    <div>
      <div className="fs-3">Закрытые заказы</div>
      <ClosedOrderList />
    </div>
  );
};
