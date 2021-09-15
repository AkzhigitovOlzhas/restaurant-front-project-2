import React from "react";
import { ActiveOrderList } from "../Lists";

export const ActiveOrdersEditor = () => {
  return (
    <div>
      <div className="fs-3">Активные заказы</div>
      <ActiveOrderList />
    </div>
  );
};
