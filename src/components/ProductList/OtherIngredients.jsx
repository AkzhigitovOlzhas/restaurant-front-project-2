import React from "react";
import { useQuery } from "react-query";
import { getCrossSells } from "../../api";

export const OtherIngredients = ({ handleSetIngredients }) => {
  const { data, isLoading } = useQuery("cross_sells", getCrossSells);

  if (isLoading) {
    return null;
  }

  return (
    <div className="mt-2">
      {data.length === 0 ? (
        <></>
      ) : (
        <>
          <div className="fs-6 fw-bold text-danger mb-1">Дополнительно:</div>
          <ul className="list-group ">
            {data.map((item) => {
              return (
                <li key={item.id} className="list-group-item">
                  <div className="d-flex align-items-center">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      value={item.name}
                      onChange={(event) =>
                        handleSetIngredients(event, item.id, item.price)
                      }
                    />
                    <div className="ms-2">{item.name}</div>
                  </div>
                  <div className="text-secondary fw-bold">+{item.price}Р</div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};
