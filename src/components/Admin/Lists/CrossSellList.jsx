import React from "react";
import { useQuery } from "react-query";
import { getAllCrossSellsAdmin } from "../../../api";
import { CrossSellCard } from "../Cards";

export const CrossSellList = () => {
  const { data, isLoading } = useQuery(
    "crossSellsAdmin",
    getAllCrossSellsAdmin
  );

  if (isLoading) {
    return null;
  }

  return (
    <div>
      {data.map((item) => (
        <CrossSellCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};
