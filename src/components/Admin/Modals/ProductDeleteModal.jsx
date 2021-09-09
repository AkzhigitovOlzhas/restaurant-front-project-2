import React from "react";
import { Button, Modal } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { useMutation, useQueryClient } from "react-query";
import { removeProduct } from "../../../api";

export const ProductDeleteModal = ({ id, name, show, handleClose }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeProduct);
  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries("products");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Вы уверены что хотите удалить этот товар?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Отмена
        </Button>
        <Button variant="danger" onClick={remove} disabled={isLoading}>
          {isLoading ? (
            <Loader type="ThreeDots" color="#fff" height={10} />
          ) : (
            "Удалить"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
