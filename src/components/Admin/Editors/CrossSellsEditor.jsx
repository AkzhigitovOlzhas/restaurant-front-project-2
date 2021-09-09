import React from "react";
import { CrossSellList } from "../Lists";

export const CrossSellsEditor = () => {
  return (
    <div className="mt-2">
      <div className="fs-3">Доп. товары</div>
      <CrossSellList />
    </div>
  );
};
