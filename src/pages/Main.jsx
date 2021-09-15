import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Baners, Footer, Header } from "../components";
import "./style.css";
export const Main = () => {
  return (
    <>
      <div
        className="d-flex flex-column bg-white "
        style={{ minHeight: "100vh" }}
      >
        <div style={{ flex: "1 0 auto" }}>
          <Header />
          <Baners />
          <Container className="py-3">
            <div className="my-4 mb-3">
              <h1 className="text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </h1>
              <p className="text-center fs-5 text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                veritatis provident modi eius impedit architecto.
              </p>
            </div>

            <div className="my-4">
              <div className="d-block d-md-flex justify-content-between">
                <div className="d-flex flex-column align-items-center p-2">
                  <img src="/img/b1_100x100_c2d.png" alt="" />
                  <div>
                    <div className="fw-bold fs-4">Всегда свежие продукты</div>
                    <div>
                      После оформления заказа мы свяжемся с вами, подтвердим
                      получение и займемся подготовкой.
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-center p-2">
                  <img src="/img/b2_100x100_c2d.png" alt="" />
                  <div>
                    <div className="fw-bold fs-4">Оплата после получения</div>
                    <div>
                      После оформления заказа мы свяжемся с вами, подтвердим
                      получение и займемся подготовкой.
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-center p-2">
                  <img src="/img/b3_100x100_c2d.png" alt="" />
                  <div>
                    <div className="fw-bold fs-4">Акции и бонусы</div>
                    <div>
                      После оформления заказа мы свяжемся с вами, подтвердим
                      получение и займемся подготовкой.
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-center p-2">
                  <img src="/img/b4_100x100_c2d.png" alt="" />
                  <div>
                    <div className="fw-bold fs-4">Быстрая доставка</div>
                    <div>
                      После оформления заказа мы свяжемся с вами, подтвердим
                      получение и займемся подготовкой.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Row>
              <Col md={6} xs={12}>
                <div className="display-3">Как сделать заказ?</div>
              </Col>
              <Col>
                <div class="mb-4">
                  <ol class="step pl-0">
                    <li class="step-element pb-0">
                      <div class="step-number">
                        <span class="number">1</span>
                      </div>
                      <div class="step-excerpt">
                        <h6 class="font-weight-bold dark-grey-text mb-3">
                          Write your requirements
                        </h6>
                        <p class="text-muted">
                          Think the or organization same proposal to affected
                          heard reclined in be it reassuring.
                        </p>
                      </div>
                    </li>
                    <li class="step-element pb-0">
                      <div class="step-number">
                        <span class="number">2</span>
                      </div>
                      <div class="step-excerpt">
                        <h6 class="font-weight-bold dark-grey-text mb-3">
                          Sign the contract
                        </h6>
                        <p class="text-muted">
                          Think the or organization same proposal to affected
                          heard reclined in be it reassuring.
                        </p>
                      </div>
                    </li>
                    <li class="step-element pb-0">
                      <div class="step-number">
                        <span class="number">3</span>
                      </div>
                      <div class="step-excerpt">
                        <h6 class="font-weight-bold dark-grey-text mb-3">
                          We start developing
                        </h6>
                        <p class="text-muted">
                          Think the or organization same proposal to affected
                          heard reclined in be it reassuring.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </Col>
            </Row>

            <div className="my-4 mt-5">
              <div className="fs-3 fw-bold mb-2">Наше местонахождения</div>
              <iframe
                title="Карта ресторанов"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A7570c2a13faf6a7ead7dfa49071595236556439b74acde4089039c4c9b182b5f&amp;source=constructor"
                width="100%"
                height="400"
                frameBorder="0"
              ></iframe>
            </div>
            <div className="mb-5">
              <div className="fw-bold fs-5 mt-3">
                Почему наша пицца такая вкусная?
              </div>
              <div className="text-secondary">
                Секрет наших поваров прост — много начинки на тонкой основе. Для
                приготовления настоящей пиццы мы берем муку высшего сорта, ждем,
                когда тесто полностью подойдет, перед выпеканием смазываем его
                исключительно оливковым маслом. А все ингредиенты в начинках
                подбираются так, чтобы они идеально сочетались друг с другом. В
                нашем меню представлены традиционные виды любимого всеми
                итальянского блюда: «Маргарита», «Пепперони», «Гавайская»,
                «Четыре сыра», «Дьябло». Также Вы найдете оригинальные рецепты,
                многие из которых уже стали хитами: «Семушка», «Тропиканка»,
                «Жульетта», «Шашлычная» и др. У нас есть специальные предложения
                для вегетарианцев и поклонников морепродуктов, а для любителей
                мяса — рецепты сразу с несколькими его видами. Если Вам трудно
                сделать выбор, возьмите пиццу из разных половин – мы предлагаем
                попробовать до восьми разных вариантов начинки в одной пицце!
              </div>
              <div className="fw-bold fs-5 mt-3">
                Доставка пиццы в Москве круглосуточно
              </div>
              <div className="text-secondary">
                Почему-то вкусной, сытной, горячей пиццы больше всего хочется
                ночью, когда все ближайшие кафе и пиццерии уже закрыты. «Империя
                пиццы и суши» доставляет заказы на дом практически 24 часа в
                сутки (небольшой технический перерыв длится с 5:00 до 8:00) и
                без выходных.
              </div>
              <div className="fw-bold fs-5 mt-3">
                Заказывать еду у нас удобно, потому что мы:
              </div>
              <ul className="text-secondary">
                <li> Перед отправкой сообщаем время прибытия курьера.</li>
                <li>Работаем с заказами на сумму от 690 рублей.</li>
                <li>Выполняем доставку по Москве бесплатно.</li>
              </ul>
              <div className="fw-bold fs-5 mt-3">Как заказать?</div>
              <div className="text-secondary">
                Купить нашу пиццу очень просто:
                <ol className="text-secondary">
                  <li>Оформите заказ через корзину онлайн.</li>
                  <li>Скачайте наше приложение для смартфона.</li>
                  <li>Позвоните нам по номеру +7 (999) 999-99-99.</li>
                </ol>
              </div>
            </div>
            <div
              className="bg-dark text-white d-flex flex-column justify-content-evenly p-2"
              style={{ minHeight: "320px" }}
            >
              <div>
                <div className="fs-2 text-center mb-2">
                  Как связаться с нами?
                </div>
                <div className="fs-6 text-center text-secondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Explicabo, similique rerum totam corporis at ad aspernatur
                  nostrum cum libero temporibus.
                </div>
              </div>
              <div className="fs-5 d-block d-sm-flex align-items-center justify-content-center text-center">
                <div>
                  <a
                    href="/contacts"
                    class="text-decoration-none me-sm-3 p-2 px-3 bg-white text-dark fw-bold"
                    style={{ borderRadius: "20px" }}
                  >
                    Контакты
                  </a>
                </div>
                <div className="mt-sm-0 mt-3">
                  <a
                    href="tel:+996709999999"
                    class="text-decoration-none ms-sm-3 text-white fw-bold"
                  >
                    0709 999 999
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};
