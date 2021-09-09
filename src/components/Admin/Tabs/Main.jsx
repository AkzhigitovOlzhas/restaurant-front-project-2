import React from "react";
import { CategoryEditor, CrossSellsEditor, ProductEditor } from "../Editors";

export const Main = () => {
  return (
    <div className="p-2">
      <ProductEditor />
      <CategoryEditor />
      <CrossSellsEditor />
    </div>
  );
};
