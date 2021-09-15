import React from "react";
import { Row } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { useQuery } from "react-query";
import { getAllProductsAdmin } from "../../../api";
import { ProductCard } from "../Cards";

export const ProductList = () => {
  const { data, isLoading } = useQuery("products", getAllProductsAdmin);
  if (isLoading) {
    return (
      <div className="w-100 d-flex justify-content-center">
        <Loader type="Bars" color="black" height={80} width={80} />
      </div>
    );
  }
  return (
    <Row>
      {data.length === 0 ? (
        <div className="fs-4">Пока что нет ни одного товара.</div>
      ) : (
        data.map((item) => (
          <ProductCard key={item.id} data={item} id={item.id} />
        ))
      )}
    </Row>
  );
};
