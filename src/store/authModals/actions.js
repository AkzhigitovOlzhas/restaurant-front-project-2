export const authModalsActionsTypes = {
  SET_SHOW_SIGN_IN_MODAL: "SET_SHOW_SIGN_IN_MODAL",
  SET_SHOW_SIGN_UP_MODAL: "SET_SHOW_SIGN_UP_MODAL",
};

export const authModalActions = {
  setShowSignInModal: (payload) => ({
    type: authModalsActionsTypes.SET_SHOW_SIGN_IN_MODAL,
    signIn: payload,
  }),
  setShowSignUpModal: (payload) => ({
    type: authModalsActionsTypes.SET_SHOW_SIGN_UP_MODAL,
    signUp: payload,
  }),
};
 