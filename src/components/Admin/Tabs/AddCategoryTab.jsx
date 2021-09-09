import React, { useState } from "react";
import { useMutation } from "react-query";
import { addCategory } from "../../../api";
import { AddCategoryForm } from "../AdminForms";

export const AddCategoryTab = () => {
  const { mutateAsync, isLoading } = useMutation(addCategory);
  const [isNotError, setIsNotError] = useState(false);

  const onFormSubmit = async (data) => {
    const response = await mutateAsync(data);

    if (response.error) {
      setIsNotError(false);
    } else {
      setIsNotError(true);
    }

    console.log(response);
  };

  return (
    <AddCategoryForm
      onFormSubmit={onFormSubmit}
      isNotError={isNotError}
      isLoading={isLoading}
    />
  );
};
