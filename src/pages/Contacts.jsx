import React from "react";
import { Container } from "react-bootstrap";
import {
  FaInstagramSquare,
  FaPhoneSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Footer, Header } from "../components";

export const Contacts = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <div style={{ flex: "1 0 auto" }}>
        <Header />
        <Container>
          <section class="fdb-block bg-white mt-5 py-3">
            <div class="container">
              <div class="row text-center justify-content-center">
                <div class="col-12 col-md-8 col-lg-7">
                  <p class="h2">Контакты</p>
                  <p class="lead">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <div className="d-flex justify-content-center align-items-center my-3">
                    <a href="/" className="me-3 text-dark">
                      <FaPhoneSquare size="40px" />
                    </a>
                    <a href="/" className="mx-3 text-dark">
                      <FaWhatsappSquare size="40px" />
                    </a>
                    <a href="/" className="ms-3 text-dark">
                      <FaInstagramSquare size="40px" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
