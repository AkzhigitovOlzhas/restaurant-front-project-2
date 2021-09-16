import React from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { addProduct } from "../../../api";
import { AddProductForm } from "../AdminForms";

export const AddProductTab = () => {
  const { mutateAsync, isLoading } = useMutation(addProduct);

  const onFormSubmit = async (data) => {
    await mutateAsync(data);
    toast.info("Товар успешно добавлен", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <AddProductForm onFormSubmit={onFormSubmit} isLoadingSubmit={isLoading} />
    </div>
  );
};
