import React from "react";
import { Categories, Footer, Header } from "../components";

export const Menu = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div style={{ flex: "1 0 auto" }}>
        <Header />
        <Categories />
      </div>
      <Footer />
    </div>
  );
};
