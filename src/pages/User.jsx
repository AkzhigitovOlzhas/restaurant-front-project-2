import React from "react";
import { Accordion, Container } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { useQuery } from "react-query";
import { getAllUserOrders } from "../api";
import { Footer, Header, OrderCard } from "../components";

export const User = () => {
  const { data, isLoading } = useQuery("productAdmin", getAllUserOrders);
  const userData = JSON.parse(localStorage.getItem("user"));

  if (isLoading) {
    return (
      <div className="w-100 d-flex justify-content-center">
        <Loader type="Bars" color="black" height={80} width={80} />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div style={{ flex: "1 0 auto" }}>
        <Header />
        <Container>
          {localStorage.getItem("token") ? (
            <>
              <div className="display-3 text-center">Личный кабинет</div>
              <div className="mt-3 card p-2">
                <div>Имя: {userData.name}</div>
                <div>Фамилия: {userData.surname}</div>
                <div>Телефон: {userData.phone}</div>
                <div>Эл.почта: {userData.email}</div>
              </div>
            </>
          ) : (
            <div>У вас нет доступа к этой страницу</div>
          )}
          <div className="my-3">
            <div className="display-5 mb-3">История заказов</div>

            {data.length === 0 ? (
              <div className="fs-5">Пока что исторя заказов пуста.</div>
            ) : (
              <Accordion>
                {data.map((order) => (
                  <OrderCard order={order} key={order.id} />
                ))}
              </Accordion>
            )}
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
