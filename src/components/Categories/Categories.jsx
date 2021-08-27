import React from "react";
import { Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";
import { ProductList } from "../ProductList";
import { CategoryItem } from "./CategoryItem";

import { getAllCategories } from "../../api";
import { useQuery } from "react-query";

export const Categories = () => {
  const { data, isLoading } = useQuery("categories", getAllCategories);

  if (isLoading) {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col lg={2} md={12}>
            <p className="fs-3">Меню</p>
            <div className="d-flex justify-content-center">
              <Spinner animation="border" />
            </div>
          </Col>
          <Col>
            <ProductList />
          </Col>
        </Row>
      </Container>
    );
  }
  
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col lg={2} md={12}>
          <p className="fs-3">Меню</p>
          <ListGroup>
            {data.categoriesList.map((category) => {
              return (
                <CategoryItem
                  key={category.id}
                  name={category.name}
                  link={`/menu/${category.id}`}
                  count={category.count}
                />
              );
            })}
          </ListGroup>
        </Col>
        <Col>
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};
