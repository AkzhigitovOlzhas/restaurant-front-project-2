import React from "react";
import { Accordion } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { useQuery } from "react-query";
import { getAllActiveOrders } from "../../../api";
import { ActiveOrderCard } from "../Cards";

export const ActiveOrderList = () => {
  const { data, isLoading } = useQuery("activeOrders", getAllActiveOrders);

  if (isLoading) {
    return (
      <div className="w-100 d-flex justify-content-center">
        <Loader type="Bars" color="black" height={80} width={80} />
      </div>
    );
  }

  return (
    <>
      <div className="mt-3">
        <Accordion>
          {data.map((order) => (
            <ActiveOrderCard key={order.id} order={order} />
          ))}
        </Accordion>
      </div>
    </>
  );
};
