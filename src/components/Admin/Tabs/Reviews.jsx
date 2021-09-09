import React from "react";
import { ReviewList } from "../Lists";

export const Reviews = () => {
  return (
    <div className="p-2">
      <div className="fs-2">Отзывы</div>
      <ReviewList />
    </div>
  );
};
