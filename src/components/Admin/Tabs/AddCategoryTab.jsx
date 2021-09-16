import React from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { addCategory } from "../../../api";
import { AddCategoryForm } from "../AdminForms";

export const AddCategoryTab = () => {
  const { mutateAsync, isLoading } = useMutation(addCategory);

  const onFormSubmit = async (data) => {
    await mutateAsync(data);
    toast.info("Категория успено добавлена", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return <AddCategoryForm onFormSubmit={onFormSubmit} isLoading={isLoading} />;
};
