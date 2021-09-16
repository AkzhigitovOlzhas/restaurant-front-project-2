import React from "react";
import { Modal } from "react-bootstrap";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { editCategoty } from "../../../api";
import { AddCategoryForm } from "../AdminForms";

export const CategoryEditModal = ({ id, show, initVal, handleClose }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(editCategoty);

  const edit = async (data) => {
    await mutateAsync({ id, data });
    queryClient.invalidateQueries("categoriesAdmin");
    handleClose();
    toast.info("Категория успешна изменена", {
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
        <Modal.Title>Редактирование категории</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddCategoryForm
          onFormSubmit={edit}
          isLoading={isLoading}
          initVal={initVal}
        />
      </Modal.Body>
    </Modal>
  );
};
