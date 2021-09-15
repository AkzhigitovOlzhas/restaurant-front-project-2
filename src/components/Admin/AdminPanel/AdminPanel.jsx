import React from "react"; 
import { useParams } from "react-router-dom";
import {
  ActiveOrdersEditor,
  CategoryEditor,
  ClosedOrdersEditor,
  CrossSellsEditor,
  ProductEditor,
} from "../Editors";
import {
  AddCategoryTab,
  AddCrossSellsTab,
  AddProductTab,
  Reviews,
} from "../Tabs";

export const AdminPanel = () => {
  let { page } = useParams();

  if (page === "closed-orders") {
    return <ClosedOrdersEditor />;
  }

  if (page === "products") {
    return <ProductEditor />;
  }

  if (page === "reviews") {
    return <Reviews />;
  }

  if (page === "add-forms") {
    return (
      <>
        <AddProductTab />
        <AddCategoryTab />
        <AddCrossSellsTab />
      </>
    );
  }

  if (page === "categories") {
    return <CategoryEditor />;
  }

  if (page === "cross-sells") {
    return <CrossSellsEditor />;
  }

  return <ActiveOrdersEditor />;
};
