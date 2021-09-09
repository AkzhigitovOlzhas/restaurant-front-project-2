import React, { useState } from "react";
import { useMutation } from "react-query";
import { AddCrossSells } from "../../../api";
import { CrossSellsForm } from "../AdminForms";

export const AddCrossSellsTab = () => {
  const { mutateAsync, isLoading } = useMutation(AddCrossSells);
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
    <CrossSellsForm
      onFormSubmit={onFormSubmit}
      isNotError={isNotError}
      isLoading={isLoading}
    />
  );
};
