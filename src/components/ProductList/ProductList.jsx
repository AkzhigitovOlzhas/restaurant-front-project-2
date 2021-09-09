import React from "react";
import { Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getAllCards } from "../../api/api";
import { ProductCard } from "./ProductCard";
import { useQuery } from "react-query";
import { ToastContainer, Zoom } from "react-toastify";

export const ProductList = () => {
  const { category } = useParams();

  const { data, isLoading } = useQuery(["products", { category }], getAllCards);

  if (isLoading) {
    return (
      <Row className="justify-content-center mt-3">
        <Spinner animation="border" style={{ width: "5rem", height: "5rem" }} />
      </Row>
    );
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom}
      />
      <p className="fs-3 mb-2">{data.name}</p>{" "}
      <Row>
        {data.products.map((item) => {
          return <ProductCard key={item.id} data={item} />;
        })}
      </Row>
    </>
  );
};
