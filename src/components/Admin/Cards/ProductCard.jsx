import React from "react";
import { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { ProductDeleteModal, ProductEditModal } from "../Modals";

export const ProductCard = ({ data, id }) => {
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <Col
      xl={2}
      lg={3}
      md={4}
      xs={6}
      className="d-flex justify-content-center p-2"
    >
      <div className="shadow  rounded d-flex flex-column align-items-center w-100 p-2 bg-white justify-content-between">
        <img
          src={`http://willdimr.beget.tech/restaurant1/storage/app/${data.image}`}
          alt=""
          style={{ maxWidth: "100%" }}
        />
        <div style={{ width: "100%", marginTop: "5px" }}>
          <div className="mb-2">{data.name}</div>
          <Button
            variant="warning"
            style={{ width: "100%", marginBottom: "7px" }}
            onClick={() => setIsEdit(true)}
          >
            Редактировать
          </Button>
          <Button
            variant="danger"
            style={{ width: "100%" }}
            onClick={() => setIsDelete(true)}
          >
            Удалить
          </Button>
        </div>
      </div>
      <ProductEditModal
        id={id}
        show={isEdit}
        handleClose={() => setIsEdit(false)}
      />
      <ProductDeleteModal
        id={id}
        name={data.name}
        show={isDelete}
        handleClose={() => setIsDelete(false)}
      />
    </Col>
  );
};
