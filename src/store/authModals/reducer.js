import { authModalsActionsTypes } from "./actions";

const initialState = {
  signIn: false,
  signUp: false,
};

export const authModalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case authModalsActionsTypes.SET_SHOW_SIGN_IN_MODAL:
      return { ...state, signIn: action.signIn };
    case authModalsActionsTypes.SET_SHOW_SIGN_UP_MODAL:
      return { ...state, signUp: action.signUp };
    default:
      return state;
  }
};
