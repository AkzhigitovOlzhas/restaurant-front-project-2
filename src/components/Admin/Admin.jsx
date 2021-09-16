import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import { AdminPanel } from "./AdminPanel/AdminPanel";
export const Admin = () => {
  function isAdmin() {
    let res = JSON.parse(localStorage.getItem("user"));
    if (!localStorage.getItem("user")) {
      return false;
    }
    if (+res.group === 2) {
      return true;
    }
    return false;
  }

  return (
    <>
      {isAdmin() ? (
        <Container style={{ marginTop: "20px" }}>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Zoom}
          />
          <Row>
            <Col lg={2} md={3} xs={12} className="mb-md-0 mb-3">
              <p className="fs-3">Админ панель</p>
              <ListGroup>
                <Link to="/admin/active-orders" className="category-link">
                  <ListGroup.Item className="list-group-item">
                    <div className="category-name text-break">
                      Активные заказы
                    </div>
                  </ListGroup.Item>
                </Link>
                <Link to="/admin/closed-orders" className="category-link">
                  <ListGroup.Item className="list-group-item">
                    <div className="category-name text-break">
                      Закрытые заказы
                    </div>
                  </ListGroup.Item>
                </Link>
                <Link to="/admin/products" className="category-link">
                  <ListGroup.Item className="list-group-item">
                    <div className="category-name text-break">Товары</div>
                  </ListGroup.Item>
                </Link>
                <Link to="/admin/categories" className="category-link">
                  <ListGroup.Item className="list-group-item">
                    <div className="category-name text-break">Категории</div>
                  </ListGroup.Item>
                </Link>
                <Link to="/admin/cross-sells" className="category-link">
                  <ListGroup.Item className="list-group-item">
                    <div className="category-name text-break">Доп. Товары</div>
                  </ListGroup.Item>
                </Link>
                <Link to="/admin/reviews" className="category-link">
                  <ListGroup.Item className="list-group-item">
                    <div className="category-name text-break">Отзывы</div>
                  </ListGroup.Item>
                </Link>
                <Link to="/admin/add-forms" className="category-link">
                  <ListGroup.Item className="list-group-item">
                    <div className="category-name text-break">
                      Формы добавления
                    </div>
                  </ListGroup.Item>
                </Link>
              </ListGroup>
            </Col>
            <Col>
              <AdminPanel />
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="text-center display-3">
          У вас нет доступа к этой странице
        </div>
      )}
    </>
  );
};
