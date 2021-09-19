import React from "react";
import { Container } from "react-bootstrap";
import { Footer, Header } from "../components";

export const AboutUs = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div style={{ flex: "1 0 auto" }}>
        <Header />
        <Container>
          <div className="display-3">О нас</div>
          <div className="bg-white p-3 mt-3">
            <div className="d-flex align-items-center">
              <div className="me-4">
                <div className="fs-3">Lorem ipsum dolor sit amet.</div>
                <div className="text-secondary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat rem in tempora inventore dolorum ipsam, dolor
                  architecto, alias laudantium accusamus impedit voluptatem
                  obcaecati hic, consequatur suscipit provident aspernatur
                  tempore. Totam aliquam molestias velit accusamus qui maiores
                  quae adipisci facilis inventore, reprehenderit vero esse quos,
                  nam eaque commodi et nisi doloremque quod asperiores officia
                  temporibus. Fugiat dicta ipsam suscipit explicabo voluptatum
                  distinctio tempora sunt rem laborum inventore? Nemo, odit.
                  Beatae sint animi, earum velit eaque molestias minus non
                  magnam repudiandae doloremque adipisci architecto harum
                  recusandae deleniti neque eum quam. Asperiores officia
                  sapiente laborum illum omnis minima, numquam odit autem
                  impedit dolore.
                </div>
              </div>
              <img
                src="/img/pexels-photo-825661.jpeg"
                alt=""
                style={{ width: "300px" }}
              />
            </div>
            <div className="d-flex mt-4 align-items-center">
              <img
                src="/img/pexels-photo-708587.jpeg"
                alt=""
                style={{ width: "300px" }}
              />
              <div className="ms-4">
                <div className="fs-3">Lorem ipsum dolor sit amet.</div>
                <div className="text-secondary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat rem in tempora inventore dolorum ipsam, dolor
                  architecto, alias laudantium accusamus impedit voluptatem
                  obcaecati hic, consequatur suscipit provident aspernatur
                  tempore. Totam aliquam molestias velit accusamus qui maiores
                  quae adipisci facilis inventore, reprehenderit vero esse quos,
                  nam eaque commodi et nisi doloremque quod asperiores officia
                  temporibus. Fugiat dicta ipsam suscipit explicabo voluptatum
                  distinctio tempora sunt rem laborum inventore? Nemo, odit.
                  Beatae sint animi, earum velit eaque molestias minus non
                  magnam repudiandae doloremque adipisci architecto harum
                  recusandae deleniti neque eum quam. Asperiores officia
                  sapiente laborum illum omnis minima, numquam odit autem
                  impedit dolore.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
