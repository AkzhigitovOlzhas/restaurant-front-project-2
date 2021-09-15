import React from "react";
import Loader from "react-loader-spinner";
import { useQuery } from "react-query";
import { getAllCategoriesAdmin } from "../../../api";
import { CategoryCard } from "../Cards";

export const CategoryList = () => {
  const { data, isLoading } = useQuery(
    "categoriesAdmin",
    getAllCategoriesAdmin
  );

   if (isLoading) {
    return (
      <div className="w-100 d-flex justify-content-center">
        <Loader type="Bars" color="black" height={80} width={80} />
      </div>
    );
  }

  return (
    <div>
      {data.length === 0 ? (
        <div className="fs-4">Пока что нет ни одной категории.</div>
      ) : (
        data.map((item) => (
          <CategoryCard key={item.id} id={item.id} name={item.name} />
        ))
      )}
    </div>
  );
};
