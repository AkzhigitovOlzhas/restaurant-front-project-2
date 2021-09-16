import React from "react";
import { Modal } from "react-bootstrap";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { editProduct, getProductAdmin } from "../../../api";
import { AddProductForm } from "../AdminForms";

export const ProductEditModal = ({ id, show, handleClose }) => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(
    ["productAdmin", { id }],
    getProductAdmin
  );
  const { mutateAsync, isLoading: isMutating } = useMutation(editProduct);

  const onFormSubmit = async (data) => {
    await mutateAsync({ data, id });
    queryClient.invalidateQueries("productsAdmin");
    handleClose();
    toast.info("Товар успешно изменен!", {
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
    <Modal show={show} fullscreen onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Редактирование</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isLoading ? null : (
          <>
            <AddProductForm
              onFormSubmit={onFormSubmit}
              isLoadingSubmit={isMutating}
              initVal={data}
            />
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};
