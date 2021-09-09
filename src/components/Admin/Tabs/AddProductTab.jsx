import React, { useState } from "react";
import { useMutation } from "react-query";
import { addProduct } from "../../../api";
import { AddProductForm } from "../AdminForms";

export const AddProductTab = () => {
  const { mutateAsync, isLoading } = useMutation(addProduct);
  const [isNotError, setIsNotError] = useState(false);

  const onFormSubmit = async (data) => {
    const response = await mutateAsync(data);

    if (response.error) {
      setIsNotError(false);
    } else {
      setIsNotError(true);
    } 
  };
  return (
    <div>
      <AddProductForm
        onFormSubmit={onFormSubmit}
        isNotError={isNotError}
        isLoadingSubmit={isLoading}
      />
    </div>
  );
};
