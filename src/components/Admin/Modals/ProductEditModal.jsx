import React from "react";
import { Modal } from "react-bootstrap";
import { AddProductForm } from "../AdminForms";

export const ProductEditModal = ({ id, show, handleClose }) => {
  return (
    <Modal show={show} fullscreen onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Редактирование</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddProductForm />
      </Modal.Body>
    </Modal>
  );
};
