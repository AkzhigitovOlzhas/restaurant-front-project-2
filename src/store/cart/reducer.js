import { cartActionsTypes } from "./actions";

const initialState = {
  cart: {},
  countCart: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionsTypes.SET_CART:
      return { ...state, cart: action.cart };
    case cartActionsTypes.SET_COUNT_CART:
      return { ...state, countCart: action.countCart };
    default:
      return state;
  }
};
