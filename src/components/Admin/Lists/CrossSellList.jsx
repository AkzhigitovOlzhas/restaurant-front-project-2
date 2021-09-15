import React from "react";
import Loader from "react-loader-spinner";
import { useQuery } from "react-query";
import { getAllCrossSellsAdmin } from "../../../api";
import { CrossSellCard } from "../Cards";

export const CrossSellList = () => {
  const { data, isLoading } = useQuery(
    "crossSellsAdmin",
    getAllCrossSellsAdmin
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
