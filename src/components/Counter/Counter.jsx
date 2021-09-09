import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export const Counter = ({ setPrice, count, setCount }) => {
  return (
    <div className="d-flex align-items-center  user-select-none ms-1">
      <div
        onClick={() => {
          setCount(count + 1);
          setPrice(true);
        }}
      >
        <AiOutlinePlusCircle className="fs-4" />
      </div>
      <div className="fs-4 mx-1">{count}</div>
      <div
        onClick={() => {
          if (count - 1 !== 0) {
            setCount(count - 1);
            setPrice(false);
          }
        }}
      >
        <AiOutlineMinusCircle className="fs-4" />
      </div>
    </div>
  );
};
