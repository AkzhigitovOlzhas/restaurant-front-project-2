import React from "react";
import { Footer, Header } from "../components";
import { OrderList } from "../components";

export const Cart = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div style={{ flex: "1 0 auto" }}>
        <Header />
        <OrderList />
      </div>
      <Footer />
    </div>
  );
};
