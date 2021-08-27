import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { ReviewsList } from "./ReviewsList";
import "./style.css";

export const Reviews = ({ className, data }) => {
  return (
    <div className={className}>
      <div className="reviews">
        <Row style={{ maxWidth: "100%" }}>
          <Col lg={12}>
            <Form.Floating>
              <Form.Control type="text" placeholder="otzyv" />
              <label>Ваш отзыв</label>
            </Form.Floating>
          </Col>
          <Col className="mt-1">
            <Button>Отправить</Button>
          </Col>
        </Row>
        <ReviewsList data={data} />
      </div>
    </div>
  );
};
