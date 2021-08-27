import React from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.css";

export const CategoryItem = ({ link, name, count }) => {
  return (
    <Link to={link} className="category-link">
      <ListGroup.Item className="list-group-item">
        <div className="category-name text-break">{name}</div>{" "}
        <Badge bg="secondary">{count}</Badge>
      </ListGroup.Item>
    </Link>
  );
};
