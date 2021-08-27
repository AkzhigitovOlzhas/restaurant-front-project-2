import React from "react";
import { Container } from "react-bootstrap"; 
import { Header } from "../components";

export const User = () => {
  const userData = JSON.parse(localStorage.getItem("user")); 
  return (
    <div>
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
      </Container>
    </div>
  );
};
