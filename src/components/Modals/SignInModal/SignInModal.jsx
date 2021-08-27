import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import { authModalActions } from "../../../store/authModals/actions";
import { authActions } from "../../../store/auth/actions";
import { useDispatch } from "react-redux";

import { useMutation } from "react-query";
import { signIn } from "../../../api";
import { SignInForm } from "../../Forms";
import { useHistory } from "react-router-dom";

export const SignInModal = (props) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { mutateAsync, isLoading } = useMutation(signIn);
  const [isAuthFail, setIsAuthFail] = useState(false);

  const onFormSubmit = async (data) => {
    const response = await mutateAsync(data);

    if (response.error) {
      setIsAuthFail(true);
    } else {
      setIsAuthFail(false);
      dispatch(authActions.setIsLogged(true));
      dispatch(authActions.setUserData(response.user));
      dispatch(authModalActions.setShowSignInModal(false));
      history.push("/user");
      localStorage.setItem("token", response.access_token);
      localStorage.setItem("user", JSON.stringify(response.user));
    }
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Вход</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <SignInForm
          onFormSubmit={onFormSubmit}
          isLoading={isLoading}
          isAuthFail={isAuthFail}
        />
      </Modal.Body>

      <Modal.Footer className="justify-content-center">
        <p>
          Нет аккаунта? Зарегистрируйтесь{" "}
          <span
            className="link-primary"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(authModalActions.setShowSignInModal(false));
              dispatch(authModalActions.setShowSignUpModal(true));
            }}
          >
            здесь.
          </span>
        </p>
      </Modal.Footer>
    </Modal>
  );
};
