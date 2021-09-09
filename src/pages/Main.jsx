import React from "react";
import { Baners, Footer, Header } from "../components";
export const Main = () => {
  return (
    <>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <div style={{ flex: "1 0 auto" }}>
          <Header />
          <Baners />
        </div>
        <Footer />
      </div>
    </>
  );
};
