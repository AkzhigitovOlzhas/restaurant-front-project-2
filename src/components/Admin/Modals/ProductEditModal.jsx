import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useMutation, useQuery } from "react-query";
import { editProduct, getProductAdmin } from "../../../api";
import { AddProductForm } from "../AdminForms";

export const ProductEditModal = ({ id, show, handleClose }) => {
  const { data, isLoading } = useQuery(
    ["productAdmin", { id }],
    getProductAdmin
  );
  const { mutateAsync, isLoading: isMutating } = useMutation(editProduct);
  const [isNotError, setIsNotError] = useState(false);

  const onFormSubmit = async (data) => {
    const response = await mutateAsync({ ...data, id });
    if (response.error) {
      setIsNotError(false);
    } else {
      setIsNotError(true);
    }
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
              isNotError={isNotError}
              isLoadingSubmit={isMutating}
              initVal={data}
            />
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};
