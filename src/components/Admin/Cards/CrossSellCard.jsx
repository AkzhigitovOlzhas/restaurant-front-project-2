import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CrossSellDeleteModal } from "../Modals";

export const CrossSellCard = ({ id, name, price }) => {
  const [isDelete, setIsDelete] = useState(false);

  return (
    <div className="p-2 d-flex flex-row justify-content-between align-items-center card mb-1">
      <div>
        <div className="fs-5 fw-bold">
          <span className="text-primary text-opacity-75">Название: </span>
          <span className="fw-normal">{name}</span>
        </div>
        <div className="fw-bold text-secondary">Цена: {price}руб</div>
      </div>
      <Button variant="danger" onClick={() => setIsDelete(true)}>
        Удалить
      </Button>
      <CrossSellDeleteModal
        id={id}
        name={name}
        show={isDelete}
        handleClose={() => setIsDelete(false)}
      />
    </div>
  );
};
