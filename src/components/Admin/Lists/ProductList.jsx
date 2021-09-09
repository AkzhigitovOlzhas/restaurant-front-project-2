import React from "react";
import { Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { getAllProductsAdmin } from "../../../api";
import { ProductCard } from "../Cards";

export const ProductList = () => {
  const { data, isLoading } = useQuery("products", getAllProductsAdmin);
  if (isLoading) {
    return null;
  }
  return (
    <Row className="mt-3" style={{ maxHeight: "500px", overflowY: "scroll" }}>
      {data.map((item) => (
        <ProductCard key={item.id} data={item} id={item.id} />
      ))}
    </Row>
  );
};
