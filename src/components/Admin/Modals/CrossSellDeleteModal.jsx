import React from "react";
import { Button, Modal } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { removeCrossSell } from "../../../api";

export const CrossSellDeleteModal = ({ id, name, show, handleClose }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeCrossSell);
  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries("crossSellsAdmin");
    toast.info("Доп. товар удален", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
