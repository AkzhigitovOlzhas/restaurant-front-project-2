import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CategoryDeleteModal } from "../Modals";

export const CategoryCard = ({ id, name }) => {
  const [isDelete, setIsDelete] = useState(false);
  return (
    <div className="card p-2 d-flex flex-row justify-content-between align-items-center mb-2">
      <div>{name}</div>
      <Button variant="danger" onClick={() => setIsDelete(true)}>
        Удалить
      </Button>
      <CategoryDeleteModal
        id={id}
        name={name}
        show={isDelete}
        handleClose={() => setIsDelete(false)}
      />
    </div>
  );
};
