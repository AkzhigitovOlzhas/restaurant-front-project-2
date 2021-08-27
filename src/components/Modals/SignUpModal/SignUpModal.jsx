import React from "react";
import { Modal } from "react-bootstrap";
import "./style.css";

import { authModalActions } from "../../../store/authModals/actions";
import { useDispatch } from "react-redux";
import { SignUpForm } from "../../Forms";
import { signUp } from "../../../api";
import { useMutation } from "react-query";
import { useState } from "react";

export const SignUpModal = (props) => {
  const dispatch = useDispatch();
  const [isSignUpFail, setIsSignUpFail] = useState(false);
  const [isSignUpOk, setIsSignUpOk] = useState(true);
  const { mutateAsync, isLoading } = useMutation(signUp);

  const onFormSubmit = async (data) => {
    const response = await mutateAsync(data);

    if (response.error) {
      setIsSignUpFail(true);
      setIsSignUpOk(false);
    } else {
      setIsSignUpFail(false);
      setIsSignUpOk(true);
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
        <Modal.Title id="contained-modal-title-vcenter">
          Регистрация
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignUpForm
          onFormSubmit={onFormSubmit}
          isLoading={isLoading}
          isSignUpFail={isSignUpFail}
          isSignUpOk={isSignUpOk}
          setIsSignUpOk={setIsSignUpOk}
        />
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <p>
          Уже есть аккаунт?{" "}
          <span
            className="link-primary"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(authModalActions.setShowSignUpModal(false));
              dispatch(authModalActions.setShowSignInModal(true));
            }}
          >
            Войти.
          </span>
        </p>
      </Modal.Footer>
    </Modal>
  );
};
