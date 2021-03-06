import React, { useState } from "react";
import { Button, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { API_URL } from "../../api/API_URL";
import { ProductModal } from "./ProductModal";

export const ProductCard = ({ data }) => {
  const [isOpenCardProduct, setIsOpenCardProduct] = useState(false);

  return (
    <>
      <Col
        xl={3}
        lg={4}
        md={6}
        xs={12}
        className="d-flex justify-content-center p-2"
      >
        <div className="shadow  rounded d-flex flex-column align-items-center w-100  bg-white justify-content-between">
          <div style={{ width: "100%" }}>
            <img
              src={`${API_URL}/storage/app/${data.image}`}
              alt=""
              style={{
                maxWidth: "100%",
                width: "100%",
                maxHeight: "220px",
              }}
            />
          </div>

          <div className="p-2" style={{ width: "100%" }}>
            <div className="d-flex p-2 justify-content-between align-items-center w-100">
              <div className="fs-5">{data.name}</div>
              <OverlayTrigger
                key="bottom"
                placement="bottom"
                overlay={<Tooltip id="tooltip-bottom">{data.info}</Tooltip>}
              >
                <div>
                  <HiOutlineInformationCircle className="fs-5" />
                </div>
              </OverlayTrigger>
            </div>
            <div className="w-100 d-flex justify-content-between align-items-center my-1 mb-2 px-1">
              <div>
                {data.old_price ? (
                  <div className="d-flex">
                    <span className="fs-5 text-danger fw-bold">
                      {data.price}Р
                    </span>
                    <div className="fs-6 fw-bold text-secondary text-decoration-line-through ms-1 align-self-end">
                      {data.old_price}Р
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="fs-5 text-danger fw-bold">
                      {data.price}Р
                    </span>
                  </>
                )}
              </div>
              <span className="fs-6 text-muted">{data.weight}</span>
            </div>
            <Button
              variant="dark"
              className="w-100"
              onClick={() => setIsOpenCardProduct(true)}
            >
              Подробнее
            </Button>
          </div>
        </div>
      </Col>
      <ProductModal
        show={isOpenCardProduct}
        onHide={() => setIsOpenCardProduct(false)}
        id={data.id}
      />
    </>
  );
};
