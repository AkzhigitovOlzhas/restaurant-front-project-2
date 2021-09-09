import React from "react";
import { useQuery } from "react-query";
import { getAllReviews } from "../../../api";
import { ReviewItem } from "../Cards";

export const ReviewList = () => {
  const { data, isLoading } = useQuery("reviewsAdmin", getAllReviews);

  if (isLoading) {
    return null;
  } 
  return (
    <div>
      {data.map((item) => (
        <ReviewItem
          key={item.id}
          id={item.id}
          author={item.user}
          text={item.body}
          product={item.product}
        />
      ))}
    </div>
  );
};
