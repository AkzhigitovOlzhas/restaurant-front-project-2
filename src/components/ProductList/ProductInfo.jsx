import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { HiOutlineInformationCircle } from "react-icons/hi";

export const ProductInfo = ({ title, description, ingredients, info }) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="fs-4">{title}</div>
        <OverlayTrigger
          key="bottom"
          placement="bottom"
          overlay={<Tooltip id="tooltip-bottom">{info}</Tooltip>}
        >
          <div>
            <HiOutlineInformationCircle className="fs-5" />
          </div>
        </OverlayTrigger>
      </div>
      <div className="text-muted">{description}</div>
      <div className="card p-2 mt-1">
        <div className="fs-6 fw-bold">Ингридиенты:</div>
        <div>{ingredients}</div>
      </div>
    </>
  );
};
