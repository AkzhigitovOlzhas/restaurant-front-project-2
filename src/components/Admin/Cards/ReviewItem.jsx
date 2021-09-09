import React from "react";
import { Button } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { useMutation, useQueryClient } from "react-query";
import { removeReview } from "../../../api";

export const ReviewItem = ({ id, author, text, product }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeReview);

  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries("reviewsAdmin");
  };

  return (
    <div className="p-2 d-flex flex-column card mb-2">
      <div className="fw-bold text-secondary">{author}</div>
      <div className="text-secondary">Товар: {product}</div>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <span className="fw-bold text-primary">Текст отзыва: </span>
          {text}
        </div>
        <div>
          <Button variant="danger" onClick={remove} disabled={isLoading}>
            {isLoading ? (
              <Loader type="ThreeDots" color="#fff" height={10} />
            ) : (
              "Удалить"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
