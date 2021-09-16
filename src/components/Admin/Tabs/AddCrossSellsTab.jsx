import React from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { AddCrossSells } from "../../../api";
import { CrossSellsForm } from "../AdminForms";

export const AddCrossSellsTab = () => {
  const { mutateAsync, isLoading } = useMutation(AddCrossSells);

  const onFormSubmit = async (data) => {
    await mutateAsync(data);
    toast.info("Доп. товар успено добавлен", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return <CrossSellsForm onFormSubmit={onFormSubmit} isLoading={isLoading} />;
};
