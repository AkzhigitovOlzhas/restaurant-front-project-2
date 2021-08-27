import { authActionsTypes } from "./actions";

const initialState = {
  isLogged: false,
  userData: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionsTypes.SET_IS_LOGGED:
      return { ...state, isLogged: action.isLogged };
    case authActionsTypes.SET_USER_DATA:
      return { ...state, userData: action.userData };
    default:
      return state;
  }
};
