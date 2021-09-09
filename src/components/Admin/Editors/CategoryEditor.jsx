import React from "react";
import { CategoryList } from "../Lists";

export const CategoryEditor = () => {
  return (
    <div className="my-3">
      <div className="fs-3">Категории</div>
      <CategoryList />
    </div>
  );
};
