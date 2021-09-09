import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../Header";
import { AdminPanel } from "./AdminPanel/AdminPanel";
export const Admin = () => {
  return (
    <div>
      <Header />
      <Container> 
        <AdminPanel />
      </Container>
    </div>
  );
};
