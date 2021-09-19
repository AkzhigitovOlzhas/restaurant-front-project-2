import React from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { addOrder } from "../api";
import { Footer, Header, OrderForm } from "../components";
export const OrderPage = () => {
  const { mutateAsync, isLoading } = useMutation(addOrder);

  const onFormSubmit = async (data) => {
    await mutateAsync(data);
    toast.info("Заказ успешно оформлен, с вами свяжутся в ближайшее время", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
