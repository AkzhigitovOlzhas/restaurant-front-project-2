import React from "react";
import { useMutation } from "react-query";
import { addOrder } from "../api";
import { Footer, Header, OrderForm } from "../components";

export const OrderPage = () => {
  const { mutateAsync, isLoading } = useMutation(addOrder);

  const onFormSubmit = async (data) => {
    await mutateAsync(data);
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div style={{ flex: "1 0 auto" }}>
        <Header />
        <OrderForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
      </div>
      <Footer />
    </div>
  );
};
