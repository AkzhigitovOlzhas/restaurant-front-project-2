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
    return <Loader />;
  }

  return (
    <div>
      {data.map((item) => (
        <CategoryCard key={item.id} id={item.id} name={item.name} />
      ))}
    </div>
  );
};
