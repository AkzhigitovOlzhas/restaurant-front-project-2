import React from "react";
import { Container } from "react-bootstrap";
import { Footer, Header } from "../components";

export const AboutUs = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div style={{ flex: "1 0 auto" }}>
        <Header />
        <Container>
          <div className="display-3">О нас</div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
