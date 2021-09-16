import React, { useEffect } from "react";
import {
  Badge,
  Container,
  Dropdown,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

import { authModalActions } from "../../store/authModals/actions";
import { authActions } from "../../store/auth/actions";
import { SignInModal, SignUpModal } from "../Modals";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { cartActions } from "../../store/cart/actions";
import { ToastContainer, Zoom } from "react-toastify";

export const Header = () => {
  const history = useHistory();

  const { signIn, signUp } = useSelector((state) => state.authModals);
  const { isLogged } = useSelector((state) => state.auth);
  const { countCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("cartCount")) {
      dispatch(cartActions.setCountCart(localStorage.getItem("cartCount")));
    }
  }, [dispatch]);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="up">
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
      <Container>
        <Navbar.Brand href="/">Company Name</Navbar.Brand>
        <div className="d-flex flex-row align-items-center">
          <Nav className="d-flex flex-row me-3 d-lg-none">
            <Nav.Link href="/cart">
              <Badge bg="danger">{countCart}</Badge>
              <FiShoppingCart className="fs-5" />
            </Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto  my-1">
            <Nav.Link className="ms-3" href="/menu/0">
              Меню
            </Nav.Link>
            <Nav.Link className="ms-3" href="/contacts">
              Контакты
            </Nav.Link>
            <Nav.Link className="ms-3" href="/about">
              О нас
            </Nav.Link>
            <NavDropdown
              id="dropdown-basic-button"
              className="ms-3 d-lg-none p-0"
              variant="dark"
              title="Авторизация"
            >
              {localStorage.getItem("token") || isLogged ? (
                <>
                  <Dropdown.Item href="/user">Личный кабинет</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    onClick={() => {
                      dispatch(authActions.setIsLogged(false));
                      dispatch(authActions.setUserData({}));
                      localStorage.clear();
                      history.push("/");
                    }}
                  >
                    Выход
                  </Dropdown.Item>
                </>
              ) : (
                <>
                  <Dropdown.Item
                    onClick={() =>
                      dispatch(authModalActions.setShowSignInModal(true))
                    }
                  >
                    Вход
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    onClick={() =>
                      dispatch(authModalActions.setShowSignUpModal(true))
                    }
                  >
                    Регистрация
                  </Dropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
          <Nav className="d-none d-lg-block">
            <div className="d-flex flex-row align-items-center">
              <Nav.Link href="/cart">
                <Badge bg="danger">{countCart}</Badge>
                <FiShoppingCart className="fs-5" />
              </Nav.Link>

              <NavDropdown
                id="dropdown-basic-button"
                className="ms-3 "
                variant="dark"
                title={
                  <span>
                    <AiOutlineUser className="fs-5" />
                  </span>
                }
              >
                {localStorage.getItem("token") || isLogged ? (
                  <>
                    <Dropdown.Item href="/user">Личный кабинет</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      onClick={() => {
                        dispatch(authActions.setIsLogged(false));
                        dispatch(authActions.setUserData({}));
                        history.push("/");
                        localStorage.clear();
                      }}
                    >
                      Выход
                    </Dropdown.Item>
                  </>
                ) : (
                  <>
                    <Dropdown.Item
                      onClick={() =>
                        dispatch(authModalActions.setShowSignInModal(true))
                      }
                    >
                      Вход
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      onClick={() =>
                        dispatch(authModalActions.setShowSignUpModal(true))
                      }
                    >
                      Регистрация
                    </Dropdown.Item>
                  </>
                )}
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
        <SignInModal
          show={signIn}
          onHide={() => dispatch(authModalActions.setShowSignInModal(false))}
        />
        <SignUpModal
          show={signUp}
          onHide={() => dispatch(authModalActions.setShowSignUpModal(false))}
        />
      </Container>
    </Navbar>
  );
};
