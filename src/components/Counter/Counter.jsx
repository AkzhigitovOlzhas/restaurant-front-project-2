import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export const Counter = ({ changeNum, state }) => {
  return (
    <div className="d-flex align-items-center  user-select-none ms-1">
      <div
        onClick={() => {
          changeNum(state + 1);
        }}
      >
        <AiOutlinePlusCircle className="fs-4" />
      </div>
      <div className="fs-4 mx-1">{state}</div>
      <div
        onClick={() => {
          if (state - 1 !== 0) {
            changeNum(state - 1);
          }
        }}
      >
        <AiOutlineMinusCircle className="fs-4" />
      </div>
    </div>
  );
};
