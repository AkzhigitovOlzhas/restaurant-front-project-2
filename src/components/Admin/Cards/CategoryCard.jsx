import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CategoryDeleteModal, CategoryEditModal } from "../Modals";

export const CategoryCard = ({ id, name }) => {
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="card p-2 d-flex flex-row justify-content-between align-items-center mb-2">
      <div>{name}</div>
      <div>
        <Button
          variant="warning"
          className="me-3"
          onClick={() => setIsEdit(true)}
        >
          Редактировать
        </Button>
        <Button variant="danger" onClick={() => setIsDelete(true)}>
          Удалить
        </Button>
      </div>
      <CategoryEditModal
        id={id}
        show={isEdit}
        initVal={name}
        handleClose={() => setIsEdit(false)}
      />
      <CategoryDeleteModal
        id={id}
        name={name}
        show={isDelete}
        handleClose={() => setIsDelete(false)}
      />
    </div>
  );
};
