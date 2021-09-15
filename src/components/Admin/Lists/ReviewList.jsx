import React from "react";
import Loader from "react-loader-spinner";
import { useQuery } from "react-query";
import { getAllReviews } from "../../../api";
import { ReviewItem } from "../Cards";

export const ReviewList = () => {
  const { data, isLoading } = useQuery("reviewsAdmin", getAllReviews);

  if (isLoading) {
    return (
      <div className="w-100 d-flex justify-content-center">
        <Loader type="Bars" color="black" height={80} width={80} />
      </div>
    );
  }
  return (
    <div>
      {data.length === 0 ? (
        <div className="fs-4">Нет ни одного отзыва.</div>
      ) : (
        data.map((item) => (
          <ReviewItem
            key={item.id}
            id={item.id}
            author={item.user}
            text={item.body}
            product={item.product}
          />
        ))
      )}
    </div>
  );
};
