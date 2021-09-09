import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { addReview } from "../../api";
import { ReviewForm } from "../ReviewForm";
import { ReviewsList } from "./ReviewsList";
import "./style.css";

export const Reviews = ({ className, data, id_product }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(addReview);

  const onFormSubmit = async (data) => {
    await mutateAsync(data);
    queryClient.invalidateQueries("products");
  };

  return (
    <div className={className}>
      <div className="reviews">
        <ReviewForm
          onFormSubmit={onFormSubmit}
          isLoading={isLoading}
          id_product={id_product}
        />
        <ReviewsList data={data} />
      </div>
    </div>
  );
};
